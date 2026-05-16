type Lead = {
  id: string;
  name: string;
  service: string;
  source: "Website" | "WhatsApp" | "Referral" | "Call";
  status: "New" | "Contacted" | "Quoted";
  date: string;
};

const rows: Lead[] = [
  { id: "lead-1", name: "Sarah Malik", service: "Blocked Drain", source: "Website", status: "New", date: "May 14" },
  { id: "lead-2", name: "Liam O'Connor", service: "Pipe Leak Repair", source: "Call", status: "Contacted", date: "May 13" },
  { id: "lead-3", name: "Aakash Bista", service: "Water Heater Service", source: "WhatsApp", status: "Quoted", date: "May 12" },
  { id: "lead-4", name: "Nora Chen", service: "Emergency Plumbing", source: "Referral", status: "New", date: "May 12" },
  { id: "lead-5", name: "Ethan Nguyen", service: "Toilet Installation", source: "Website", status: "Contacted", date: "May 11" },
];

export default function LeadsTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-[#e6e9ef] bg-white">
      <table className="min-w-full divide-y divide-[#eef1f5] text-sm">
        <thead className="bg-[#f8f9fb]">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">Name</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">Service</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">Source</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">Status</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-[#8a94a6]">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#f0f2f6] bg-white">
          {rows.map((lead) => (
            <tr key={lead.id} className="hover:bg-[#fafbff]">
              <td className="px-4 py-3 font-semibold text-[#111827]">{lead.name}</td>
              <td className="px-4 py-3 text-[#4b5563]">{lead.service}</td>
              <td className="px-4 py-3 text-[#4b5563]">{lead.source}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                    lead.status === "New"
                      ? "bg-[#edf2ff] text-[#4361ee]"
                      : lead.status === "Contacted"
                        ? "bg-[#fff7e7] text-[#b7791f]"
                        : "bg-[#eafbf1] text-[#17884f]"
                  }`}
                >
                  {lead.status}
                </span>
              </td>
              <td className="px-4 py-3 text-[#4b5563]">{lead.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
