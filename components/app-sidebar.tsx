"use client";
import { Home, ShoppingBasket, UserRound, MoveRight } from "lucide-react";
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
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();

  const handleLogout = async () => {
    const supabase = createClient();
    console.log("Sign out");
    await supabase.auth.signOut();
    await logout();

    router.push("/admin/login");
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-[#002664]">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-xl ">
            Nature Admin
          </SidebarGroupLabel>
          <SidebarGroupContent className="py-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-white flex items-center">
                      <item.icon />
                      <span>{item.title}</span>

                      <span className="ml-auto">
                        {pathname === item.url && <MoveRight />}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#002664]">
        <SidebarMenu>
          <SidebarMenuItem>
            <Button
              className="w-full cursor-pointer"
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
