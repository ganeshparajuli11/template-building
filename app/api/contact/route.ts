import { NextResponse } from "next/server";
import {
	createContactSubmission,
	listContactSubmissions,
} from "@/lib/services/contact-submissions";
import { contactSubmissionSchema } from "@/lib/validators/contact";

export const dynamic = "force-dynamic";

export async function GET() {
	const submissions = await listContactSubmissions();

	return NextResponse.json({
		success: true,
		message: "Contact submissions fetched successfully.",
		data: submissions,
	});
}

export async function POST(request: Request) {
	let payload: unknown;

	try {
		payload = await request.json();
	} catch {
		return NextResponse.json(
			{
				success: false,
				message: "Invalid JSON payload.",
			},
			{ status: 400 },
		);
	}

	const validated = contactSubmissionSchema.safeParse(payload);

	if (!validated.success) {
		return NextResponse.json(
			{
				success: false,
				message: "Please check submitted fields.",
				errors: validated.error.flatten().fieldErrors,
			},
			{ status: 400 },
		);
	}

	const submission = await createContactSubmission(validated.data);

	return NextResponse.json(
		{
			success: true,
			message: "Your request has been received.",
			data: {
				id: submission.id,
			},
		},
		{ status: 201 },
	);
}
