"use client";

import { motion } from "framer-motion";

import AdminCard from "@/components/admin/AdminCard";

const connectors = [
  { name: "Call Tracking", state: "Connected" },
  { name: "WhatsApp Click Tracking", state: "Connected" },
  { name: "Google Business Profile", state: "Pending" },
  { name: "Search Console", state: "Connected" },
];

const badgeStyles: Record<string, string> = {
  Connected: "bg-[#eafbf1] text-[#17884f]",
  Pending: "bg-[#fff7e7] text-[#b7791f]",
  Warning: "bg-[#fff0ee] text-[#ca3f35]",
};

export default function ConnectorStatus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AdminCard>
        <h3 className="text-xl font-extrabold tracking-tight text-[#111827]">Connector Status</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {connectors.map((connector) => (
            <div key={connector.name} className="rounded-xl border border-[#e9edf4] bg-[#f9fafc] p-4">
              <p className="text-sm font-semibold text-[#111827]">{connector.name}</p>
              <span className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${badgeStyles[connector.state]}`}>
                {connector.state}
              </span>
            </div>
          ))}
        </div>
      </AdminCard>
    </motion.div>
  );
}
