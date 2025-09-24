"use client";
import { Home, ShoppingBasket, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabaseClient";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { logout } from "@/app/(admin)/admin/login/actions";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: "/admin/dashboard/products",
    icon: ShoppingBasket,
  },
  {
    title: "Users",
    url: "/admin/dashboard/users",
    icon: UserRound,
  },
  // {
  //   title: "Search",
  //   url: "#",
  //   icon: Search,
  // },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

export function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    console.log("Sign out");
    await supabase.auth.signOut();
    await logout();

    router.push("/admin/login");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className="w-full cursor-pointer"
              onClick={() => {
                handleLogout();
              }}
            >
              Login Out
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
