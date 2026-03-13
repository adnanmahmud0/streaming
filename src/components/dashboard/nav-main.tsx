"use client";

import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      isActive?: boolean;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu className="gap-2">
          {items.map((item) => (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.isActive}
                    className={`
                      h-11 px-4 text-base font-medium transition-all duration-200
                      ${
                        item.isActive
                          ? ""
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }
                    `}
                  >
                    {item.items ? (
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-5 ${item.isActive ? "text-white" : "text-slate-500"}`}
                          >
                            {item.icon}
                          </div>
                          <span>{item.title}</span>
                        </div>
                        <ChevronRightIcon className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </div>
                    ) : (
                      <Link href={item.url} className="w-full">
                        <div className="flex items-center gap-3">
                          <div
                            className={`size-5 ${item.isActive ? "text-white" : "text-slate-500"}`}
                          >
                            {item.icon}
                          </div>
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                {item.items && (
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-none ml-4 gap-1">
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={subItem.isActive}
                          >
                            <Link
                              href={subItem.url}
                              className={`
                                h-10 px-4 text-sm font-medium transition-colors rounded-lg
                                ${
                                  subItem.isActive
                                    ? "bg-red-50 text-[#F9253B] border-l-2 border-[#F9253B] rounded-l-none"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                }
                              `}
                            >
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                )}
              </SidebarMenuItem>
            </Collapsible>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
