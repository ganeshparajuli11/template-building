import Card from "@/components/ui/Card";

const connectors = [
  { name: "Call Tracking", state: "Active" },
  { name: "WhatsApp Click Tracking", state: "Active" },
  { name: "Google Business Profile", state: "Pending" },
  { name: "Search Console", state: "Connected" },
];

export default function ConnectorStatus() {
  return (
    <Card>
      <h3 className="text-lg font-bold text-[var(--secondary)]">Connector status</h3>
      <div className="mt-4 space-y-3">
        {connectors.map((connector) => (
          <div key={connector.name} className="flex items-center justify-between rounded-lg border border-[var(--border)] p-3">
            <p className="text-sm text-gray-700">{connector.name}</p>
            <p className="text-sm font-semibold text-[var(--secondary)]">{connector.state}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}