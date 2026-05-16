import AdminCard from "@/components/admin/AdminCard";

export default function StatisticsCard() {
  return (
    <AdminCard>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight text-[#111827]">Statistics</h3>
          <p className="mt-1 text-sm text-[#8a94a6]">Target you&apos;ve set for each month</p>
        </div>
        <div className="inline-flex rounded-xl border border-[#e6e9ef] bg-white p-1 text-xs font-semibold text-[#8a94a6]">
          <button type="button" className="rounded-lg bg-[#edf2ff] px-3 py-1.5 text-[#3f5efb]">Overview</button>
          <button type="button" className="rounded-lg px-3 py-1.5">Sales</button>
          <button type="button" className="rounded-lg px-3 py-1.5">Revenue</button>
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-xl border border-[#edf0f5] bg-[#f9fbff] p-4">
        <svg viewBox="0 0 900 280" className="h-[240px] w-full">
          <defs>
            <linearGradient id="stats-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#5f7dff" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#5f7dff" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <path d="M0 185 C120 165, 220 175, 330 160 C450 145, 580 170, 690 168 C790 166, 860 172, 900 176 L900 280 L0 280 Z" fill="url(#stats-fill)" />
          <path d="M0 185 C120 165, 220 175, 330 160 C450 145, 580 170, 690 168 C790 166, 860 172, 900 176" fill="none" stroke="#5f7dff" strokeWidth="3" />
          <path d="M0 225 C120 230, 230 235, 330 238 C450 242, 570 215, 690 220 C790 224, 860 229, 900 228" fill="none" stroke="#9eb2ff" strokeWidth="2.5" />
        </svg>
      </div>
    </AdminCard>
  );
}
