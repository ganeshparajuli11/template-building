import type { Lead } from "@/types";

import Card from "@/components/ui/Card";

const leads: Lead[] = [
  { id: "lead-1", name: "Nabin KC", service: "Emergency Plumbing", source: "call", status: "new" },
  { id: "lead-2", name: "Sarita Lama", service: "Drain Cleaning", source: "whatsapp", status: "contacted" },
  { id: "lead-3", name: "Aakash Bista", service: "Water Heater Service", source: "form", status: "quoted" },
];

export default function LeadsTable() {
  return (
    <Card>
      <h3 className="text-lg font-bold text-[var(--secondary)]">Latest leads</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="pb-2">Name</th>
              <th className="pb-2">Service</th>
              <th className="pb-2">Source</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-[var(--border)]">
                <td className="py-2 font-medium text-[var(--secondary)]">{lead.name}</td>
                <td className="py-2 text-gray-600">{lead.service}</td>
                <td className="py-2 capitalize text-gray-600">{lead.source}</td>
                <td className="py-2 capitalize text-[var(--primary)]">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}