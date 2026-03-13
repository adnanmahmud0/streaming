"use client";

import * as React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SearchIcon,
  FilterIcon,
  TrendingUpIcon,
  UsersIcon,
  DollarSignIcon,
  PieChartIcon,
  EllipsisVerticalIcon,
  ArrowUpRightIcon,
  Trash2Icon,
  EyeIcon,
} from "lucide-react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  {
    title: "Total Users",
    value: "12,450",
    trend: "0.5%",
    icon: <UsersIcon className="size-5 text-slate-500" />,
  },
  {
    title: "Total Revenue",
    value: "$21.45M",
    trend: "+18.2%",
    icon: <DollarSignIcon className="size-5 text-green-600" />,
  },
  {
    title: "Active Subscribers",
    value: "671,479",
    trend: "+12.5%",
    icon: <PieChartIcon className="size-5 text-orange-500" />,
  },
  {
    title: "Growth Rate",
    value: "+15.8%",
    trend: "+3.2%",
    icon: <ArrowUpRightIcon className="size-5 text-blue-500" />,
  },
];

const initialSubscribes = [
  {
    id: 1,
    email: "sadat@gmail.com",
    plan: "Premium",
    status: "Paused",
    startDate: "25/02/2026",
    billingCycle: "Monthly",
    amount: "$2500",
  },
  {
    id: 2,
    email: "john@example.com",
    plan: "Enterprise",
    status: "Cancelled",
    startDate: "20/02/2026",
    billingCycle: "Yearly",
    amount: "$4500",
  },
  {
    id: 3,
    email: "sarah@gmail.com",
    plan: "Premium",
    status: "Active",
    startDate: "15/02/2026",
    billingCycle: "Monthly",
    amount: "$2500",
  },
  {
    id: 4,
    email: "mike@yahoo.com",
    plan: "Free",
    status: "Active",
    startDate: "10/02/2026",
    billingCycle: "Monthly",
    amount: "$0",
  },
  {
    id: 5,
    email: "lisa@outlook.com",
    plan: "Premium",
    status: "Paused",
    startDate: "05/02/2026",
    billingCycle: "Monthly",
    amount: "$2500",
  },
  {
    id: 6,
    email: "emma@gmail.com",
    plan: "Premium",
    status: "Active",
    startDate: "01/02/2026",
    billingCycle: "Monthly",
    amount: "$2500",
  },
  {
    id: 7,
    email: "david@email.com",
    plan: "Enterprise",
    status: "Active",
    startDate: "28/01/2026",
    billingCycle: "Yearly",
    amount: "$4500",
  },
];

export default function SubscribesPage() {
  const [subscribesList, setSubscribesList] = React.useState(initialSubscribes);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("filter");

  const filteredSubscribes = subscribesList.filter((sub) => {
    const matchesSearch = sub.email
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "filter" ||
      sub.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const handleDeleteSub = (id: number) => {
    setSubscribesList(subscribesList.filter((s) => s.id !== id));
    toast.success("Subscription entry deleted successfully");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
          Subscribe
        </h1>
        <p className="text-slate-500 font-medium">
          Manage subscriptions, plans, and billing cycles
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {stats.map((card) => (
          <Card
            key={card.title}
            className="bg-white shadow-xs border-slate-100 p-6 rounded-[1.5rem]"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                {card.title}
              </p>
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                {card.icon}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {card.value}
              </p>
              <div className="flex items-center gap-1 text-xs font-bold text-green-600">
                <TrendingUpIcon className="size-3.5" />
                {card.trend}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="px-4 lg:px-6">
        <Card className="shadow-none border-slate-200 overflow-hidden bg-white rounded-[1.5rem]">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-slate-100">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
              />
            </div>
            <div className="flex items-center gap-3">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-14 w-40 bg-slate-50 border-none rounded-xl font-bold text-slate-600">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-slate-100">
                  <SelectItem value="filter">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="paused">Paused</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-none">
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] pl-6">
                  Email
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Plan
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Status
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Start Date
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Billing Cycle
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Amount
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right pr-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscribes.length > 0 ? (
                filteredSubscribes.map((sub) => (
                  <TableRow
                    key={sub.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6 font-bold text-slate-900">
                      {sub.email}
                    </TableCell>
                    <TableCell className="text-center font-black text-[10px] uppercase tracking-widest">
                      <span
                        className={`px-3 py-1 rounded-full ${sub.plan === "Premium" ? "bg-red-50 text-[#F9253B]" : sub.plan === "Enterprise" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"}`}
                      >
                        {sub.plan}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          sub.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : sub.status === "Paused"
                              ? "bg-yellow-50 text-yellow-600"
                              : "bg-red-50 text-red-600"
                        }`}
                      >
                        {sub.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-slate-500 font-bold">
                      {sub.startDate}
                    </TableCell>
                    <TableCell className="text-center text-slate-500 font-bold">
                      {sub.billingCycle}
                    </TableCell>
                    <TableCell className="text-center font-black text-slate-900">
                      {sub.amount}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-slate-400 hover:bg-slate-100 rounded-xl"
                          >
                            <EllipsisVerticalIcon className="size-6" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-48 bg-white rounded-2xl border-slate-100 shadow-xl p-2"
                        >
                          <DropdownMenuItem className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer">
                            <EyeIcon className="size-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteSub(sub.id)}
                            className="h-10 rounded-xl font-bold text-red-500 gap-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                          >
                            <Trash2Icon className="size-4" />
                            Delete Entry
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7} className="h-60 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-16 rounded-3xl bg-slate-50 flex items-center justify-center">
                        <PieChartIcon className="size-8 text-slate-200" />
                      </div>
                      <p className="text-slate-400 font-bold">
                        No subscriptions found
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-slate-50 bg-slate-50/20">
            <span className="text-sm font-bold text-slate-400">
              Showing {filteredSubscribes.length} of {subscribesList.length}{" "}
              users
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-11 px-5 rounded-xl font-bold text-slate-500 border-slate-200"
              >
                Previous
              </Button>
              <Button className="h-11 w-11 bg-[#F9253B] text-white font-black hover:bg-red-600 rounded-xl shadow-lg shadow-red-500/20">
                1
              </Button>
              <Button
                variant="outline"
                className="h-11 w-11 rounded-xl font-bold text-slate-400 border-slate-100"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="h-11 w-11 rounded-xl font-bold text-slate-400 border-slate-100"
              >
                3
              </Button>
              <Button
                variant="outline"
                className="h-11 px-5 rounded-xl font-bold text-slate-500 border-slate-200"
              >
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
