"use client";

import * as React from "react";
import {
  Card,
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
  TrendingUpIcon,
  UsersIcon,
  DollarSignIcon,
  ClapperboardIcon,
  CrownIcon,
  EllipsisVerticalIcon,
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
    value: "$4,367",
    trend: "0.5%",
    icon: <DollarSignIcon className="size-5 text-green-600" />,
  },
  {
    title: "Total Content",
    value: "540",
    trend: "+5.2%",
    icon: <ClapperboardIcon className="size-5 text-orange-500" />,
  },
  {
    title: "Total Subscribe",
    value: "780",
    trend: "+0.5%",
    icon: <CrownIcon className="size-5 text-yellow-500" />,
  },
];

const initialRevenueData = [
  {
    id: 1,
    email: "sadat@gmail.com",
    trxId: "#TRX-8821",
    date: "25/02/2026",
    coin: "$1000",
    subscription: "$2500",
    total: "$3500",
    type: "Subscription",
  },
  {
    id: 2,
    email: "john@example.com",
    trxId: "#TRX-8822",
    date: "24/02/2026",
    coin: "$500",
    subscription: "$0",
    total: "$500",
    type: "Coins",
  },
  {
    id: 3,
    email: "sarah@gmail.com",
    trxId: "#TRX-8823",
    date: "23/02/2026",
    coin: "$1000",
    subscription: "$2500",
    total: "$3500",
    type: "Subscription",
  },
  {
    id: 4,
    email: "mike@yahoo.com",
    trxId: "#TRX-8824",
    date: "22/02/2026",
    coin: "$0",
    subscription: "$4500",
    total: "$4500",
    type: "Subscription",
  },
  {
    id: 5,
    email: "lisa@outlook.com",
    trxId: "#TRX-8825",
    date: "21/02/2026",
    coin: "$200",
    subscription: "$0",
    total: "$200",
    type: "Coins",
  },
  {
    id: 6,
    email: "emma@gmail.com",
    trxId: "#TRX-8826",
    date: "20/02/2026",
    coin: "$1000",
    subscription: "$2500",
    total: "$3500",
    type: "Subscription",
  },
  {
    id: 7,
    email: "david@email.com",
    trxId: "#TRX-8827",
    date: "19/02/2026",
    coin: "$1000",
    subscription: "$2500",
    total: "$3500",
    type: "Subscription",
  },
  {
    id: 8,
    email: "anna@gmail.com",
    trxId: "#TRX-8828",
    date: "18/02/2026",
    coin: "$300",
    subscription: "$0",
    total: "$300",
    type: "Coins",
  },
];

export default function RevenuesPage() {
  const [revenueList, setRevenueList] = React.useState(initialRevenueData);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState("filter");

  const filteredRevenue = revenueList.filter((rev) => {
    const matchesSearch =
      rev.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rev.trxId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      typeFilter === "filter" ||
      rev.type.toLowerCase() === typeFilter.toLowerCase();
    return matchesSearch && matchesType;
  });

  const handleDeleteRevenue = (id: number) => {
    setRevenueList(revenueList.filter((r) => r.id !== id));
    toast.success("Transaction entry deleted successfully");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
          Revenues
        </h1>
        <p className="text-slate-500 font-medium">
          Track platform income, transactions, and financial growth
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
                placeholder="Search by email or TRX ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
              />
            </div>
            <div className="flex items-center gap-3">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="h-14 w-40 bg-slate-50 border-none rounded-xl font-bold text-slate-600">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-slate-100">
                  <SelectItem value="filter">All Types</SelectItem>
                  <SelectItem value="subscription">Subscription</SelectItem>
                  <SelectItem value="coins">Coins</SelectItem>
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
                  TRX ID
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Date
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Coin
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Subscription
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-center">
                  Total Amount
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right pr-6">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRevenue.length > 0 ? (
                filteredRevenue.map((rev) => (
                  <TableRow
                    key={rev.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6 font-bold text-slate-900">
                      {rev.email}
                    </TableCell>
                    <TableCell className="text-center font-medium text-slate-500">
                      {rev.trxId}
                    </TableCell>
                    <TableCell className="text-center text-slate-500 font-bold">
                      {rev.date}
                    </TableCell>
                    <TableCell className="text-center text-slate-500 font-black">
                      {rev.coin}
                    </TableCell>
                    <TableCell className="text-center text-slate-500 font-black">
                      {rev.subscription}
                    </TableCell>
                    <TableCell className="text-center font-black text-slate-900">
                      {rev.total}
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
                            View Transaction
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteRevenue(rev.id)}
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
                        <DollarSignIcon className="size-8 text-slate-200" />
                      </div>
                      <p className="text-slate-400 font-bold">
                        No transactions found
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
              Showing {filteredRevenue.length} of {revenueList.length}{" "}
              transactions
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
