import AdminPageHeader from "@/components/admin/AdminPageHeader";
import ContentTabs from "@/components/dashboard/ContentTabs";

export default function ContentPage() {
  return (
    <section className="space-y-4">
      <AdminPageHeader
        title="Content"
        subtitle="Manage homepage and core site sections from a single editorial workspace."
      />
      <ContentTabs />
    </section>
  );
}
