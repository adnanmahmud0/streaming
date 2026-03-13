"use client";

import * as React from "react";
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
import {
  PlusIcon,
  UploadCloudIcon,
  XIcon,
  ChevronRightIcon,
} from "lucide-react";

export default function MovieUploadPage() {
  return (
    <div className="flex flex-col gap-8 py-8 px-4 lg:px-8 bg-[#fafafa] min-h-screen">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link
          href="/dashboard"
          className="hover:text-slate-900 transition-colors"
        >
          Dashboard
        </Link>
        <ChevronRightIcon className="size-4" />
        <Link
          href="/dashboard/content/movies"
          className="hover:text-slate-900 transition-colors"
        >
          Movies
        </Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-slate-900 font-medium font-bold">
          Upload Movie
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight uppercase">
          Upload New Movie
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Fill in the details below to add a new movie to the platform
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Details */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Basic Info */}
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-6 border-b border-slate-100 mb-8">
              <CardTitle className="text-2xl font-black text-slate-800">
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 flex flex-col gap-8">
              {/* Title */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Movie Title
                </Label>
                <Input
                  placeholder="e.g. Inception"
                  className="h-14 bg-slate-50 border-none text-lg font-medium text-slate-600 rounded-xl px-6 focus:ring-2 focus:ring-[#F9253B]/20"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Synopsis / Description
                </Label>
                <textarea
                  placeholder="Write a brief overview of the movie..."
                  className="min-h-[180px] p-6 bg-slate-50 border-none text-lg font-medium text-slate-600 rounded-xl outline-none focus:ring-2 focus:ring-[#F9253B]/20 transition-all resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Media Files */}
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-6 border-b border-slate-100 mb-8">
              <CardTitle className="text-2xl font-black text-slate-800">
                Media Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-4">
                  <Label className="text-base font-bold text-slate-700">
                    Main Movie File
                  </Label>
                  <div className="h-44 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
                    <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <UploadCloudIcon className="size-6 text-slate-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-700">
                      Select MP4, MKV or MOV
                    </p>
                    <p className="text-[10px] text-slate-400">Max size: 5GB</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Label className="text-base font-bold text-slate-700">
                    Teaser / Trailer (Optional)
                  </Label>
                  <div className="h-44 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
                    <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <UploadCloudIcon className="size-6 text-slate-400" />
                    </div>
                    <p className="text-sm font-bold text-slate-700">
                      Select Trailer File
                    </p>
                    <p className="text-[10px] text-slate-400">
                      Max size: 500MB
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metadata */}
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-6 border-b border-slate-100 mb-8">
              <CardTitle className="text-2xl font-black text-slate-800">
                Metadata & Tags
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Release Year
                  </Label>
                  <Input
                    defaultValue="2024"
                    className="h-14 bg-slate-50 border-none text-lg font-medium text-slate-600 rounded-xl px-6"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Duration (Min)
                  </Label>
                  <Input
                    placeholder="e.g. 120"
                    className="h-14 bg-slate-50 border-none text-lg font-medium text-slate-600 rounded-xl px-6"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Availability
                  </Label>
                  <Select defaultValue="free">
                    <SelectTrigger className="h-14 bg-slate-50 border-none text-lg font-medium text-slate-600 rounded-xl px-6">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl">
                      <SelectItem value="free">Free for All</SelectItem>
                      <SelectItem value="premium">Premium Only</SelectItem>
                      <SelectItem value="rent">Rent / Buy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Genres
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Action", "Sci-Fi", "Drama"].map((genre) => (
                      <div
                        key={genre}
                        className="flex items-center gap-2 px-4 py-2 bg-red-50 text-[#F9253B] rounded-full text-xs font-black uppercase tracking-wider border border-red-100"
                      >
                        {genre}
                        <XIcon className="size-3 cursor-pointer" />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="h-9 px-4 rounded-full border-slate-200 text-slate-500 font-bold gap-2 text-xs"
                    >
                      <PlusIcon className="size-4" />
                      Add Genre
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Main Cast
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {["Leonardo DiCaprio", "Cillian Murphy"].map((person) => (
                      <div
                        key={person}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-xs font-bold border border-slate-100"
                      >
                        {person}
                        <XIcon className="size-3 cursor-pointer" />
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="h-9 px-4 rounded-full border-slate-200 text-slate-500 font-bold gap-2 text-xs"
                    >
                      <PlusIcon className="size-4" />
                      Add Actor
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Visual Assets */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Portrait Poster */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Portrait Poster
              </CardTitle>
            </CardHeader>
            <div className="relative aspect-[3/4.5] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <div className="size-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloudIcon className="size-8 text-slate-400" />
              </div>
              <div className="text-center px-4">
                <p className="font-bold text-slate-700">Upload Poster</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">
                  900 × 1200 Recommended
                </p>
              </div>
            </div>
          </Card>

          {/* Landscape Thumbnail */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Landscape Thumbnail
              </CardTitle>
            </CardHeader>
            <div className="relative aspect-video border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <div className="size-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloudIcon className="size-6 text-slate-400" />
              </div>
              <div className="text-center px-4">
                <p className="font-bold text-slate-700">Upload Thumbnail</p>
                <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">
                  1920 × 1080 Recommended
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <div className="flex flex-col gap-4">
              <Button className="h-14 bg-[#F9253B] hover:bg-red-600 text-white font-black text-lg rounded-xl shadow-lg shadow-red-500/20 uppercase tracking-wider">
                Publish Movie
              </Button>
              <Button
                variant="outline"
                className="h-14 border-slate-200 text-slate-600 font-bold text-lg rounded-xl"
                asChild
              >
                <Link href="/dashboard/content/movies">Save as Draft</Link>
              </Button>
              <Button
                variant="ghost"
                className="h-12 text-slate-400 hover:text-red-500 font-bold"
                asChild
              >
                <Link href="/dashboard/content/movies">Discard Changes</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
