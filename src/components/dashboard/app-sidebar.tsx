"use client";

import * as React from "react";

import { NavMain } from "@/components/dashboard/nav-main";
import { NavUser } from "@/components/dashboard/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutGridIcon,
  UsersIcon,
  ClipboardListIcon,
  UserIcon,
  MessageSquareIcon,
  ScrollTextIcon,
  SettingsIcon,
  PlayIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = {
  user: {
    name: "Sadat Khan",
    email: "streming@gmail.com",
    avatar: "/avatars/sadat.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  const navItems = [
    {
      title: "Overview",
      url: "/dashboard",
      icon: <LayoutGridIcon />,
      isActive: pathname === "/dashboard",
    },
    {
      title: "User Management",
      url: "/dashboard/users",
      icon: <UsersIcon />,
      isActive: pathname === "/dashboard/users",
    },
    {
      title: "Content",
      url: "/dashboard/content",
      icon: <ClipboardListIcon />,
      isActive: pathname.startsWith("/dashboard/content"),
      items: [
        {
          title: "Movies",
          url: "/dashboard/content/movies",
          isActive: pathname === "/dashboard/content/movies",
        },
        {
          title: "Series",
          url: "/dashboard/content/series",
          isActive: pathname.startsWith("/dashboard/content/series"),
        },
      ],
    },
    {
      title: "Subscribes",
      url: "/dashboard/subscribes",
      icon: <UserIcon />,
      isActive: pathname === "/dashboard/subscribes",
    },
    {
      title: "Revenues",
      url: "/dashboard/revenues",
      icon: <MessageSquareIcon />,
      isActive: pathname === "/dashboard/revenues",
    },
    {
      title: "Legal",
      url: "/dashboard/legal",
      icon: <ScrollTextIcon />,
      isActive: pathname === "/dashboard/legal",
    },
    {
      title: "Settings",
      url: "/dashboard/settings",
      icon: <SettingsIcon />,
      isActive: pathname === "/dashboard/settings",
    },
  ];

  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-r border-slate-100"
      {...props}
    >
      <SidebarHeader className="p-4 pt-6">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="hover:bg-transparent active:bg-transparent"
            >
              <Link href="/dashboard" className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl ">
                  <Image
                    src="/vercel.svg"
                    alt="logo"
                    className="size-10"
                    width={500}
                    height={500}
                  />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900 font-sans">
                  Streaming
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <NavMain items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
