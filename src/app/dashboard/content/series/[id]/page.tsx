"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SearchIcon,
  PlusIcon,
  Trash2Icon,
  PencilIcon,
  ChevronLeftIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  ClapperboardIcon,
} from "lucide-react";

// Mock data for episodes
const episodesData = [
  {
    id: 1,
    title: "Episode 1: The Beginning",
    duration: "45 min",
    releaseDate: "2024-01-01",
    status: "Published",
  },
  {
    id: 2,
    title: "Episode 2: The Journey",
    duration: "42 min",
    releaseDate: "2024-01-08",
    status: "Published",
  },
  {
    id: 3,
    title: "Episode 4: The Climax",
    duration: "50 min",
    releaseDate: "2024-01-22",
    status: "Draft",
  },
];

export default function EpisodesPage() {
  const params = useParams();
  const seriesId = params.id;

  const [episodes, setEpisodes] = React.useState(episodesData);
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredEpisodes = episodes.filter((ep) =>
    ep.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const removeEpisode = (id: number) => {
    setEpisodes(episodes.filter((ep) => ep.id !== id));
  };

  // In a real app, you'd fetch series details by ID
  const seriesTitle = "The Witcher"; // Placeholder

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header with Back Button */}
      <div className="px-4 lg:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-slate-200 h-12 w-12 shrink-0"
            asChild
          >
            <Link href="/dashboard/content/series">
              <ChevronLeftIcon className="size-6 text-slate-400" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
              {seriesTitle}
            </h1>
            <p className="text-slate-500 font-medium">
              Manage episodes, seasons, and content for this series
            </p>
          </div>
        </div>
        <Button
          className="h-12 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl gap-2 px-6 shadow-lg shadow-red-500/20"
          asChild
        >
          <Link href={`/dashboard/content/series/${seriesId}/episode/upload`}>
            <PlusIcon className="size-5" />
            Add New Episode
          </Link>
        </Button>
      </div>

      {/* Table Section */}
      <div className="px-4 lg:px-6">
        <Card className="shadow-none border-slate-200 overflow-hidden bg-white rounded-[1.5rem]">
          {/* Integrated Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-slate-100 bg-white">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search episode by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
              />
            </div>
          </div>

          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-none">
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] pl-6">
                  Episode Title
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Duration
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Release Date
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Status
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEpisodes.length > 0 ? (
                filteredEpisodes.map((episode) => (
                  <TableRow
                    key={episode.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6 font-bold text-slate-900 text-lg">
                      {episode.title}
                    </TableCell>
                    <TableCell className="text-slate-500 font-bold">
                      {episode.duration}
                    </TableCell>
                    <TableCell className="text-slate-500 font-bold">
                      {episode.releaseDate}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          episode.status === "Published"
                            ? "bg-green-50 text-green-600"
                            : "bg-yellow-50 text-yellow-600"
                        }`}
                      >
                        {episode.status}
                      </span>
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
                          <DropdownMenuItem
                            asChild
                            className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                          >
                            <Link
                              href={`/dashboard/content/series/${seriesId}/episode/${episode.id}`}
                            >
                              <EyeIcon className="size-4" />
                              View Episode
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer">
                            <PencilIcon className="size-4" />
                            Edit Episode
                          </DropdownMenuItem>
                          <div className="h-px bg-slate-50 my-1" />
                          <DropdownMenuItem
                            onClick={() => removeEpisode(episode.id)}
                            className="h-10 rounded-xl font-bold text-red-500 gap-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                          >
                            <Trash2Icon className="size-4" />
                            Delete Episode
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
                        No episodes found
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
              Showing {filteredEpisodes.length} of {episodes.length} episodes
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
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
