import { z } from "zod";

export const contactSubmissionSchema = z
	.object({
		name: z.string().trim().min(2).max(100),
		phone: z.string().trim().min(6).max(25).regex(/^[0-9+\s()\-]+$/),
		suburb: z.string().trim().max(100).optional(),
		service: z.string().trim().max(120).optional(),
		message: z.string().trim().max(2000).optional(),
		honeypot: z.string().max(0).optional(),
	})
	.strict();

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
