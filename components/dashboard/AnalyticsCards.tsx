"use client";

import { ArrowDownRight, ArrowUpRight, Activity, Package, Users, WalletCards } from "lucide-react";
import { motion } from "framer-motion";

import AdminCard from "@/components/admin/AdminCard";

const cards = [
  { label: "Customers", value: "3,782", trend: "+11.01%", positive: true, icon: Users },
  { label: "Orders", value: "5,359", trend: "-9.05%", positive: false, icon: Package },
  { label: "Monthly Revenue", value: "$48,260", trend: "+7.42%", positive: true, icon: WalletCards },
  { label: "Website Sessions", value: "24,320", trend: "+6.18%", positive: true, icon: Activity },
];

export default function AnalyticsCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ y: -4, scale: 1.01 }}
          >
            <AdminCard className="p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e6ebff] bg-[#f3f6ff] text-[#4e6bff]">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-[#7b8698]">{card.label}</p>
              <p className="mt-2 text-[36px] font-black leading-none tracking-tight text-[#111827]">{card.value}</p>
              <div className="mt-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    card.positive ? "bg-[#eafbf1] text-[#17884f]" : "bg-[#fff0ee] text-[#ca3f35]"
                  }`}
                >
                  {card.positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {card.trend}
                </span>
              </div>
            </AdminCard>
          </motion.div>
        );
      })}
    </section>
  );
}