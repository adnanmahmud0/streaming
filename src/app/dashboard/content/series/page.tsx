"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  EllipsisVerticalIcon,
  SearchIcon,
  PlusIcon,
  Trash2Icon,
  PencilIcon,
  TrendingUpIcon,
  ClapperboardIcon,
  HeartIcon,
  MousePointer2Icon,
  MonitorPlayIcon,
  EyeIcon,
} from "lucide-react";

import { toast } from "sonner";

const stats = [
  {
    title: "Total Series",
    value: "1,450",
    trend: "+0.5%",
    icon: <ClapperboardIcon className="size-5 text-red-500" />,
  },
  {
    title: "Total Likes",
    value: "12.2M",
    trend: "+1.5%",
    icon: <HeartIcon className="size-5 text-red-500" />,
  },
  {
    title: "Click through rate",
    value: "32",
    trend: "+8.2%",
    icon: <MousePointer2Icon className="size-5 text-orange-500" />,
  },
  {
    title: "Total Views",
    value: "120.5M",
    trend: "+2.5%",
    icon: <MonitorPlayIcon className="size-5 text-red-500" />,
  },
];

const initialSeriesData = [
  {
    id: 1,
    title: "The Witcher",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=TW",
    seasons: 3,
    status: "Published",
    subscribe: "Weekly",
    active: true,
  },
  {
    id: 2,
    title: "Stranger Things",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=ST",
    seasons: 4,
    status: "Published",
    subscribe: "Monthly",
    active: true,
  },
  {
    id: 3,
    title: "Breaking Bad",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=BB",
    seasons: 5,
    status: "Published",
    subscribe: "Yearly",
    active: true,
  },
  {
    id: 4,
    title: "Dark",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=DK",
    seasons: 3,
    status: "Draft",
    subscribe: "Free",
    active: false,
  },
];

export default function SeriesPage() {
  const [seriesList, setSeriesList] = React.useState(initialSeriesData);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("filter");
  const [planFilter, setPlanFilter] = React.useState("all");

  const filteredSeries = seriesList.filter((series) => {
    const matchesSearch = series.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "filter" ||
      series.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesPlan =
      planFilter === "all" ||
      series.subscribe.toLowerCase().includes(planFilter.toLowerCase());
    return matchesSearch && matchesStatus && matchesPlan;
  });

  const handleDeleteSeries = (id: number) => {
    setSeriesList(seriesList.filter((s) => s.id !== id));
    toast.success("Series deleted successfully");
  };

  const handleToggleActive = (id: number) => {
    setSeriesList(
      seriesList.map((s) => (s.id === id ? { ...s, active: !s.active } : s)),
    );
    toast.success("Status updated successfully");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
            Series Management
          </h1>
          <p className="text-slate-500 font-medium">
            Manage your series catalog, seasons, and episodes
          </p>
        </div>
        <Button
          asChild
          className="h-12 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl gap-2 px-6 shadow-lg shadow-red-500/20"
        >
          <Link href="/dashboard/content/series/upload">
            <PlusIcon className="size-5" />
            Add New Series
          </Link>
        </Button>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="bg-white shadow-xs border-slate-100 p-6 rounded-[1.5rem]"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                {stat.title}
              </p>
              <div className="flex size-10 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                {stat.icon}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-3xl font-black text-slate-900 tracking-tight">
                {stat.value}
              </p>
              <div className="flex items-center gap-1 text-xs font-bold text-green-600">
                <TrendingUpIcon className="size-3.5" />
                {stat.trend}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Table Section */}
      <div className="px-4 lg:px-6">
        <Card className="shadow-none border-slate-200 overflow-hidden bg-white rounded-[1.5rem]">
          {/* Integrated Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-slate-100 bg-white">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
              />
            </div>

            <div className="flex items-center gap-3">
              <Select value={planFilter} onValueChange={setPlanFilter}>
                <SelectTrigger className="h-14 w-40 bg-slate-50 border-none rounded-xl font-bold text-slate-600">
                  <SelectValue placeholder="Plan" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-slate-100 shadow-xl">
                  <SelectItem value="all">All Plans</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="h-14 w-40 bg-slate-50 border-none rounded-xl font-bold text-slate-600">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-white rounded-xl border-slate-100 shadow-xl">
                  <SelectItem value="filter">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-none">
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] pl-6">
                  Series
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Seasons
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Status
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Subscribe
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSeries.length > 0 ? (
                filteredSeries.map((series) => (
                  <TableRow
                    key={series.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="relative size-14 overflow-hidden rounded-2xl border-2 border-white shadow-sm ring-1 ring-slate-100 bg-slate-50">
                          <Image
                            src={series.image}
                            alt={series.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">
                          {series.title}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-500 font-bold">
                      {series.seasons} Seasons
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          series.status === "Published"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {series.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${
                          series.subscribe.includes("Weekly")
                            ? "bg-red-50 text-[#F9253B] border-red-100"
                            : series.subscribe.includes("Monthly")
                              ? "bg-amber-50 text-amber-600 border-amber-100"
                              : series.subscribe.includes("Yearly")
                                ? "bg-slate-900 text-white border-slate-800"
                                : "bg-slate-50 text-slate-400 border-slate-100"
                        }`}
                      >
                        {series.subscribe}
                      </span>
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-3">
                        <Switch
                          checked={series.active}
                          onCheckedChange={() => handleToggleActive(series.id)}
                          className="data-[state=checked]:bg-[#F9253B]"
                        />
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
                            <DropdownMenuItem
                              asChild
                              className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                            >
                              <Link
                                href={`/dashboard/content/series/${series.id}`}
                              >
                                <EyeIcon className="size-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              asChild
                              className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                            >
                              <Link href={`/dashboard/content/series/upload`}>
                                <PencilIcon className="size-4" />
                                Edit Series
                              </Link>
                            </DropdownMenuItem>
                            <div className="h-px bg-slate-50 my-1" />
                            <DropdownMenuItem
                              onClick={() => handleDeleteSeries(series.id)}
                              className="h-10 rounded-xl font-bold text-red-500 gap-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                            >
                              <Trash2Icon className="size-4" />
                              Delete Series
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-60 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="size-16 rounded-3xl bg-slate-50 flex items-center justify-center">
                        <ClapperboardIcon className="size-8 text-slate-200" />
                      </div>
                      <p className="text-slate-400 font-bold">
                        No series found
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
              Showing {filteredSeries.length} of {seriesList.length} series
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
