"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex flex-col gap-4 p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 px-2">
            <Avatar className="h-10 w-10 ring-1 ring-slate-100">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-slate-50 text-slate-500">
                {user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold text-slate-900">
                {user.name}
              </span>
              <span className="truncate text-xs text-slate-500">
                {user.email}
              </span>
            </div>
          </div>
          <Button className="w-full h-11 bg-[#F9253B] hover:bg-[#F9253B] text-white font-medium flex items-center justify-center gap-2 rounded-xl shadow-lg shadow-red-500/20">
            <LogOutIcon className="size-5" />
            <span>Sign Out</span>
          </Button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
