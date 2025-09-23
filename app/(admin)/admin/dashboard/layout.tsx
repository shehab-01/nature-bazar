"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/app/auth-provider"; // Import the custom hook
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import { AuthProvider } from "@/app/auth-provider";

// A component to show while checking auth status
function LoadingScreen() {
  return (
    <div className="flex items-center justify-center h-screen">Loading...</div>
  );
}

// A component for users who are logged in but not approved
function NotApprovedScreen() {
  const handleLogOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Pending Approval</h1>
      <p>Your account is waiting for an administrator's approval.</p>
      <Button onClick={() => handleLogOut()}>Logout</Button>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, profile, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!session) {
        // If not loading and no session, redirect to login
        router.push("/admin/login");
      }
    }
  }, [session, loading, router]);

  if (loading) {
    return <LoadingScreen />;
  }

  // After loading, check for approval status
  if (session && !profile?.approve_yn) {
    // User is logged in but not approved
    return <NotApprovedScreen />;
  }

  // If the user is logged in and approved, show the dashboard
  if (session && profile?.approve_yn) {
    return (
      <AuthProvider>
        <SidebarProvider>
          <div className="flex min-h-screen">
            <AppSidebar />
            <SidebarTrigger />
            <main className="flex-1 p-6">{children}</main>
          </div>
        </SidebarProvider>
      </AuthProvider>
    );
  }

  // Fallback case, typically won't be reached if logic is correct
  return null;
}
