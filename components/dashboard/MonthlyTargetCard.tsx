import AdminCard from "@/components/admin/AdminCard";

const targetValue = 75.55;

export default function MonthlyTargetCard() {
  return (
    <AdminCard className="h-full">
      <h3 className="text-2xl font-extrabold tracking-tight text-[#111827]">Monthly Target</h3>
      <p className="mt-1 text-sm text-[#8a94a6]">Target you&apos;ve set for each month</p>

      <div className="mt-6 flex items-center justify-center">
        <div
          className="relative h-44 w-44 rounded-full"
          style={{
            background: `conic-gradient(#5f7dff ${targetValue * 3.6}deg, #e5e9f2 ${targetValue * 3.6}deg)`,
          }}
        >
          <div className="absolute inset-[14px] rounded-full bg-white" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[40px] font-black leading-none tracking-tight text-[#111827]">{targetValue}%</p>
            <span className="mt-2 inline-flex rounded-full bg-[#eafbf1] px-2.5 py-1 text-xs font-semibold text-[#17884f]">+10%</span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-[#6b7280]">You earned $3287 today. Keep up your excellent momentum.</p>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#eef1f5] pt-4 text-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">Target</p>
          <p className="mt-2 text-lg font-bold text-[#111827]">$20K</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">Revenue</p>
          <p className="mt-2 text-lg font-bold text-[#111827]">$20K</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9aa3b2]">Today</p>
          <p className="mt-2 text-lg font-bold text-[#111827]">$20K</p>
        </div>
      </div>
    </AdminCard>
  );
}
