"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
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
  SearchIcon,
  FilterIcon,
  PlusIcon,
  Trash2Icon,
  PencilIcon,
  TrendingUpIcon,
  ClapperboardIcon,
  HeartIcon,
  MousePointer2Icon,
  MonitorPlayIcon,
  EyeIcon,
  EllipsisVerticalIcon,
} from "lucide-react";

import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  {
    title: "Total Movies",
    value: "12,450",
    trend: "0.5%",
    icon: <ClapperboardIcon className="size-5 text-red-500" />,
  },
  {
    title: "Total Likes",
    value: "8.9M",
    trend: "+0.5%",
    icon: <HeartIcon className="size-5 text-red-500" />,
  },
  {
    title: "Click through rate",
    value: "25",
    trend: "+5.2%",
    icon: <MousePointer2Icon className="size-5 text-orange-500" />,
  },
  {
    title: "Total Views",
    value: "89.5M",
    trend: "+0.5%",
    icon: <MonitorPlayIcon className="size-5 text-red-500" />,
  },
];

const initialMovies = [
  {
    id: 1,
    title: "Mission Impossible",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=MI",
    duration: "45 min",
    status: "Published",
    subscribe: "Free, Weekly Pass Pro",
    active: false,
  },
  {
    id: 2,
    title: "Mission Impossible",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=M2",
    duration: "45 min",
    status: "Draft",
    subscribe: "Weekly Pass Pro, Monthly Pass Pro",
    active: false,
  },
  {
    id: 3,
    title: "Wade Warren",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=WW",
    duration: "45 min",
    status: "Published",
    subscribe: "Free, Weekly Pass Pro",
    active: true,
  },
  {
    id: 4,
    title: "Brooklyn Simmons",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=BS",
    duration: "45 min",
    status: "Published",
    subscribe: "Yearly VIP",
    active: true,
  },
  {
    id: 5,
    title: "Albert Flores",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=AF",
    duration: "45 min",
    status: "Published",
    subscribe: "Weekly Pass Pro",
    active: true,
  },
  {
    id: 6,
    title: "Guy Hawkins",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=GH",
    duration: "45 min",
    status: "Published",
    subscribe: "Free, Weekly Pass Pro",
    active: true,
  },
  {
    id: 7,
    title: "Dianne Russell",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=DR",
    duration: "45 min",
    status: "Published",
    subscribe: "Weekly Pass Pro",
    active: true,
  },
  {
    id: 8,
    title: "Kathryn Murphy",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=KM",
    duration: "45 min",
    status: "Published",
    subscribe: "Weekly Pass Pro",
    active: true,
  },
  {
    id: 9,
    title: "Bessie Cooper",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=BC",
    duration: "45 min",
    status: "Published",
    subscribe: "Weekly Pass Pro",
    active: true,
  },
];

export default function MoviesPage() {
  const [movies, setMovies] = React.useState(initialMovies);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("filter");

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "filter" || movie.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDeleteMovie = (id: number) => {
    setMovies(movies.filter((m) => m.id !== id));
    toast.success("Movie deleted successfully");
  };

  const handleToggleActive = (id: number) => {
    setMovies(
      movies.map((m) => (m.id === id ? { ...m, active: !m.active } : m)),
    );
    toast.success("Status updated successfully");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
            Movies Management
          </h1>
          <p className="text-slate-500 font-medium">
            Manage your movie catalog, metadata, and availability
          </p>
        </div>
        <Button
          asChild
          className="h-12 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl gap-2 px-6 shadow-lg shadow-red-500/20"
        >
          <Link href="/dashboard/content/movies/upload">
            <PlusIcon className="size-5" />
            Add New Content
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
                placeholder="Search by title or ID..."
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
                  Movie
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Duration
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
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie) => (
                  <TableRow
                    key={movie.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6">
                      <div className="flex items-center gap-4">
                        <div className="relative size-14 overflow-hidden rounded-2xl border-2 border-white shadow-sm ring-1 ring-slate-100 bg-slate-50">
                          <Image
                            src={movie.image}
                            alt={movie.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="font-bold text-slate-900 text-lg">
                          {movie.title}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-500 font-bold">
                      {movie.duration}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          movie.status === "Published"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {movie.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-slate-500 font-black text-[10px] uppercase tracking-widest">
                      {movie.subscribe}
                    </TableCell>
                    <TableCell className="text-right pr-6">
                      <div className="flex items-center justify-end gap-3">
                        <Switch
                          checked={movie.active}
                          onCheckedChange={() => handleToggleActive(movie.id)}
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
                                href={`/dashboard/content/movies/${movie.id}`}
                              >
                                <EyeIcon className="size-4" />
                                View Details
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              asChild
                              className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                            >
                              <Link href={`/dashboard/content/movies/upload`}>
                                <PencilIcon className="size-4" />
                                Edit Movie
                              </Link>
                            </DropdownMenuItem>
                            <div className="h-px bg-slate-50 my-1" />
                            <DropdownMenuItem
                              onClick={() => handleDeleteMovie(movie.id)}
                              className="h-10 rounded-xl font-bold text-red-500 gap-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                            >
                              <Trash2Icon className="size-4" />
                              Delete Movie
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
                        No movies found
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
              Showing {filteredMovies.length} of {movies.length} movies
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
