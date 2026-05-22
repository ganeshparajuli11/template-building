"use client";

import { useEffect, useState } from "react";

type Lead = {
	id: string;
	name: string;
	phone: string;
	service: string;
	suburb: string;
	source: "Website";
	status: "New";
	createdAt: string;
};

type LeadsApiResponse = {
	success: boolean;
	message: string;
	data: Lead[];
};

export default function LeadsTable() {
	const [rows, setRows] = useState<Lead[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const loadLeads = async () => {
			try {
				const response = await fetch("/api/contact", { cache: "no-store" });
				const payload = (await response.json()) as LeadsApiResponse;

				if (!response.ok || !payload.success) {
					throw new Error(payload.message || "Failed to load leads.");
				}

				setRows(payload.data);
			} catch (requestError) {
				setError(
					requestError instanceof Error
						? requestError.message
						: "Failed to load leads.",
				);
			} finally {
				setLoading(false);
			}
		};

		void loadLeads();
	}, []);

	if (loading) {
		return (
			<div className="rounded-2xl border border-[#e6e9ef] bg-white p-6 text-sm text-[#4b5563]">
				Loading leads...
			</div>
		);
	}

	if (error) {
		return (
			<div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
				{error}
			</div>
		);
	}

	if (rows.length === 0) {
		return (
			<div className="rounded-2xl border border-[#e6e9ef] bg-white p-6 text-sm text-[#4b5563]">
				No contact form leads yet.
			</div>
		);
	}

	return (
		<div className="overflow-x-auto rounded-2xl border border-[#e6e9ef] bg-white">
			<table className="min-w-full divide-y divide-[#eef1f5] text-sm">
				<thead className="bg-[#f8f9fb]">
					<tr>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Name
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Phone
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Service
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Suburb
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Source
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Status
						</th>
						<th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">
							Date
						</th>
					</tr>
				</thead>
				<tbody className="divide-y divide-[#f0f2f6] bg-white">
					{rows.map((lead) => (
						<tr key={lead.id} className="hover:bg-[#fafbff]">
							<td className="px-4 py-3 font-semibold text-[#111827]">{lead.name}</td>
							<td className="px-4 py-3 text-[#4b5563]">{lead.phone}</td>
							<td className="px-4 py-3 text-[#4b5563]">{lead.service}</td>
							<td className="px-4 py-3 text-[#4b5563]">{lead.suburb || "—"}</td>
							<td className="px-4 py-3 text-[#4b5563]">{lead.source}</td>
							<td className="px-4 py-3">
								<span className="inline-flex rounded-full bg-[#edf2ff] px-2 py-1 text-xs font-semibold text-[#4361ee]">
									{lead.status}
								</span>
							</td>
							<td className="px-4 py-3 text-[#4b5563]">
								{new Date(lead.createdAt).toLocaleDateString("en-AU", {
									month: "short",
									day: "numeric",
								})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
