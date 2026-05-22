import type { ContactSubmissionInput } from "@/lib/validators/contact";

export type ContactSubmissionRecord = {
	id: string;
	name: string;
	phone: string;
	suburb: string;
	service: string;
	message: string;
	source: "Website";
	status: "New";
	createdAt: string;
};

type ContactSubmissionStore = {
	submissions: ContactSubmissionRecord[];
};

const globalStore = globalThis as typeof globalThis & {
	__contactSubmissionStore?: ContactSubmissionStore;
};

function getStore() {
	if (!globalStore.__contactSubmissionStore) {
		globalStore.__contactSubmissionStore = { submissions: [] };
	}
	return globalStore.__contactSubmissionStore;
}

function sanitize(value?: string) {
	return (value ?? "").replace(/<[^>]*>/g, "").trim();
}

export async function createContactSubmission(input: ContactSubmissionInput) {
	const submission: ContactSubmissionRecord = {
		id: crypto.randomUUID(),
		name: sanitize(input.name),
		phone: sanitize(input.phone),
		suburb: sanitize(input.suburb),
		service: sanitize(input.service) || "General Enquiry",
		message: sanitize(input.message),
		source: "Website",
		status: "New",
		createdAt: new Date().toISOString(),
	};

	getStore().submissions.unshift(submission);
	return submission;
}

export async function listContactSubmissions() {
	return [...getStore().submissions];
}
