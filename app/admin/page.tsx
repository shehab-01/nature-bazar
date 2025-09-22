import { redirect } from "next/navigation";

export default function AdminPage() {
  // Redirect to login page when accessing /admin
  redirect("/admin/login");
}
