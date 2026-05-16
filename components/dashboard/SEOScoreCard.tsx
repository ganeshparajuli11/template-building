"use client";

import { motion } from "framer-motion";
import AdminCard from "@/components/admin/AdminCard";

const checks = [
  { name: "Meta title coverage", score: 92 },
  { name: "Location page indexing", score: 88 },
  { name: "Page speed readiness", score: 81 },
];

export default function SEOScoreCard() {
  const improvements = [
    "Improve location page metadata consistency",
    "Reduce CLS in callback section",
    "Increase internal links to service pages",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AdminCard>
        <h3 className="text-xl font-black tracking-tight text-[#111111]">SEO Health</h3>
        <p className="mt-1 text-sm text-[#737373]">Overall score</p>
        <p className="mt-3 text-4xl font-black tracking-tight text-[#111111]">86/100</p>

        <div className="mt-5 space-y-3">
          {checks.map((check) => (
            <div key={check.name}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="text-[#666666]">{check.name}</span>
                <span className="font-semibold text-[#111111]">{check.score}%</span>
              </div>
              <div className="h-2 rounded-full bg-[#eeeeee]">
                <div className="h-full rounded-full bg-[#1f1f1f] transition-all duration-700 ease-out" style={{ width: `${check.score}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-[#ececec] pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#737373]">Improvements</p>
          <ul className="mt-3 space-y-2 text-sm text-[#525252]">
            {improvements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#111111]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AdminCard>
    </motion.div>
  );
}