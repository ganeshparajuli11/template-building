import AdminCard from "@/components/admin/AdminCard";

const bars = [160, 360, 200, 280, 190, 205, 270, 120, 210, 370, 265, 115];
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function MonthlySalesCard() {
  return (
    <AdminCard>
      <h3 className="text-2xl font-extrabold tracking-tight text-[#111827]">Monthly Sales</h3>
      <div className="mt-6 grid grid-cols-12 items-end gap-3">
        {bars.map((value, index) => (
          <div key={labels[index]} className="flex flex-col items-center gap-2">
            <div className="flex h-[220px] w-5 items-end rounded-md bg-[#f0f3f8]">
              <div
                className="w-full rounded-md bg-[#5f7dff]"
                style={{ height: `${Math.max(20, Math.round((value / 380) * 220))}px` }}
              />
            </div>
            <span className="text-xs font-medium text-[#8a94a6]">{labels[index]}</span>
          </div>
        ))}
      </div>
    </AdminCard>
  );
}
