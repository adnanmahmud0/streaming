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
  UploadCloudIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "lucide-react";

export default function NewSeriesEpisodeUploadPage() {
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
          href="/dashboard/content/series/upload"
          className="hover:text-slate-900 transition-colors"
        >
          New Series
        </Link>
        <ChevronRightIcon className="size-4" />
        <span className="text-slate-900 font-medium">Add Episode</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="rounded-full" asChild>
          <Link href="/dashboard/content/series/upload">
            <ChevronLeftIcon className="size-5" />
          </Link>
        </Button>
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Add New Episode
          </h1>
          <p className="text-slate-500 text-lg">
            Add a new episode to your series
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Episode Details */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-8 border-b border-slate-100 mb-8">
              <CardTitle className="text-2xl font-black text-slate-800">
                Episode Details
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0 flex flex-col gap-8">
              {/* Season and Episode Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Season
                  </Label>
                  <Select defaultValue="1">
                    <SelectTrigger className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6">
                      <SelectValue placeholder="Select Season" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Season 1</SelectItem>
                      <SelectItem value="2">Season 2</SelectItem>
                      <SelectItem value="3">Season 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Episode Number
                  </Label>
                  <Input
                    placeholder="e.g. 01"
                    className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6"
                  />
                </div>
              </div>

              {/* Episode Title */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Episode Title
                </Label>
                <Input
                  placeholder="e.g. The Beginning"
                  className="h-14 bg-white border-slate-200 text-lg font-medium text-slate-600 rounded-xl px-6"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-3">
                <Label className="text-base font-bold text-slate-700">
                  Episode Synopsis
                </Label>
                <textarea
                  placeholder="Enter episode description/synopsis"
                  className="min-h-[160px] p-6 bg-white border border-slate-200 text-lg font-medium text-slate-600 rounded-xl outline-none focus:ring-2 focus:ring-[#F9253B]/20 transition-all resize-none"
                />
              </div>

              {/* Release Date and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <Label className="text-base font-bold text-slate-700">
                    Release Date
                  </Label>
                  <Input
                    type="date"
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Thumbnail and Video Upload */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          {/* Episode Thumbnail */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Episode Thumbnail
              </CardTitle>
            </CardHeader>
            <div className="relative aspect-video border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloudIcon className="size-6 text-slate-400" />
              </div>
              <div className="text-center px-4">
                <p className="font-bold text-slate-700">Upload Image</p>
                <p className="text-xs text-slate-400 mt-1">
                  Recommended 1280×720
                </p>
              </div>
            </div>
          </Card>

          {/* Video Upload */}
          <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
            <CardHeader className="px-0 pt-0 pb-4">
              <CardTitle className="text-xl font-bold text-slate-800">
                Episode Video
              </CardTitle>
            </CardHeader>
            <div className="h-48 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-4 bg-slate-50 hover:bg-slate-100/50 transition-colors cursor-pointer group">
              <div className="size-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloudIcon className="size-6 text-slate-400" />
              </div>
              <div className="text-center px-4">
                <p className="font-bold text-slate-700">Upload Video File</p>
                <p className="text-xs text-slate-400 mt-1">MP4, MKV up to 5GB</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-6 pt-8 border-t border-slate-100 mt-8">
        <p className="text-sm text-slate-400">
          The episode will be available once processing is complete.
        </p>
        <div className="flex items-center justify-end gap-4">
          <Button
            variant="outline"
            className="h-12 px-10 border-slate-200 text-slate-600 font-bold rounded-xl"
            asChild
          >
            <Link href="/dashboard/content/series/upload">Cancel</Link>
          </Button>
          <Button className="h-12 px-10 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20">
            Add Episode
          </Button>
        </div>
      </div>
    </div>
  );
}
