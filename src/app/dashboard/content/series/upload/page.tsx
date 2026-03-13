"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  PlusIcon,
  UploadCloudIcon,
  XIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function SeriesUploadPage() {
  return (
    <div className="flex flex-col gap-8 py-8 px-4 lg:px-8">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link
          href="/dashboard/content/series"
          className="hover:text-slate-900 transition-colors"
        >
          Content
        </Link>
        <ChevronRightIcon className="size-4" />
        <Link
          href="/dashboard/content/series"
          className="hover:text-slate-900 transition-colors"
        >
          TV Series
        </Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-slate-900 font-medium">Upload</span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
          Upload TV Series
        </h1>
        <p className="text-slate-500 text-lg">
          Add new TV series content to your streaming platform
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Basic Details */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-8 border-b border-slate-100 mb-8">
              <CardTitle className="text-2xl font-black text-slate-800">
                Basic Details
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 flex flex-col gap-8">
              {/* Content Type */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Content Type
                </Label>
                <Select defaultValue="tv-series">
                  <SelectTrigger className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6">
                    <SelectValue placeholder="Select Content Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="movie">Movie</SelectItem>
                    <SelectItem value="tv-series">TV Series</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Shorts Checkbox */}
              <div className="flex items-center gap-4">
                <Label className="text-base font-bold text-slate-700">
                  Shorts
                </Label>
                <Checkbox
                  id="shorts"
                  className="size-8 rounded-lg border-2 border-slate-200 data-[state=checked]:bg-[#F9253B] data-[state=checked]:border-[#F9253B]"
                />
              </div>

              {/* Show Title */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Show Title
                </Label>
                <Input
                  placeholder="e.g. Stranger Things"
                  className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Description
                </Label>
                <textarea
                  placeholder="Enter show synopsis..."
                  className="min-h-40 p-6 bg-white border border-slate-200 text-lg font-medium text-slate-600 rounded-xl outline-none focus:ring-2 focus:ring-[#F9253B]/20 transition-all resize-none"
                />
              </div>

              {/* Release Year, Availability, Category */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Release Year
                  </Label>
                  <Input
                    defaultValue="2024"
                    className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Availability
                  </Label>
                  <Select defaultValue="free">
                    <SelectTrigger className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6">
                      <SelectValue placeholder="Select Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Category
                  </Label>
                  <Select defaultValue="new">
                    <SelectTrigger className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="popular">Popular</SelectItem>
                      <SelectItem value="classic">Classic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Genres and Cast */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Genres
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Action", "Drama"].map((genre) => (
                      <div
                        key={genre}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold border border-purple-100"
                      >
                        {genre}
                        <XIcon className="size-3 cursor-pointer" />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="h-10 px-4 rounded-full border-slate-200 text-slate-500 font-bold gap-2"
                    >
                      <PlusIcon className="size-4" />
                      Add Genre
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Cast
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Brad Pitt", "Rock"].map((person) => (
                      <div
                        key={person}
                        className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-bold border border-purple-100"
                      >
                        {person}
                        <XIcon className="size-3 cursor-pointer" />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="h-10 px-4 rounded-full border-slate-200 text-slate-500 font-bold gap-2"
                    >
                      <PlusIcon className="size-4" />
                      Add Cast
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Poster, Teaser, Episodes */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Cover Poster */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Cover Poster
              </CardTitle>
            </CardHeader>
            <div className="relative aspect-3/4 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <div className="size-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloudIcon className="size-8 text-slate-400" />
              </div>
              <div className="text-center px-4">
                <p className="font-bold text-slate-700">Upload Poster Image</p>
                <p className="text-xs text-slate-400 mt-1">
                  Recommended 900×1200
                </p>
                <p className="text-[10px] text-slate-400">
                  PNG, JPG up to 10MB
                </p>
              </div>
            </div>
          </Card>

          {/* Teaser */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Teaser (Optional)
              </CardTitle>
            </CardHeader>
            <div className="h-40 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <UploadCloudIcon className="size-6 text-slate-400 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-bold text-slate-700">Upload File</p>
            </div>
          </Card>

          {/* Episodes */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-6 flex flex-row items-center justify-between border-b border-slate-100 mb-6">
              <CardTitle className="text-xl font-bold text-slate-800">
                Episodes
              </CardTitle>
              <Select defaultValue="season-1">
                <SelectTrigger className="h-10 w-32 bg-white border-slate-200 rounded-lg">
                  <SelectValue placeholder="Season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="season-1">Season 1</SelectItem>
                  <SelectItem value="season-2">Season 2</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <div className="flex flex-col gap-4">
              <div className="p-6 border border-slate-100 rounded-2xl flex flex-col items-center justify-center gap-2 bg-slate-50/50">
                <p className="text-slate-400 font-medium">
                  No episodes added yet
                </p>
              </div>
              <Button
                variant="outline"
                className="h-12 border-dashed border-2 border-slate-200 text-slate-500 font-bold gap-2 rounded-xl hover:bg-slate-50 transition-colors"
                asChild
              >
                <Link href="/dashboard/content/series/upload/episode">
                  <PlusIcon className="size-4" />
                  Add Episode
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-6 pt-8 border-t border-slate-100 mt-8">
        <p className="text-sm text-slate-400">
          Episodes will be available once processing is complete.
        </p>
        <div className="flex items-center justify-end gap-4">
          <Button
            variant="outline"
            className="h-12 px-10 border-slate-200 text-slate-600 font-bold rounded-xl"
            asChild
          >
            <Link href="/dashboard/content/series">Cancel</Link>
          </Button>
          <Button className="h-12 px-10 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20">
            Publish Show
          </Button>
        </div>
      </div>
    </div>
  );
}
