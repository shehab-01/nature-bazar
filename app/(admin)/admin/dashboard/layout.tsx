"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen">
        <AppSidebar />
        <main className="flex-1 w-full overflow-hidden">
          <SidebarTrigger />
          <div className="w-full">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
