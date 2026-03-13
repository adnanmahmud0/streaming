import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import { ChartWatchlistStatus } from "@/components/dashboard/chart-watchlist-status";
import { SectionCards } from "@/components/dashboard/section-cards";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      <SectionCards />
      <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-12 lg:px-6">
        <div className="lg:col-span-8">
          <ChartAreaInteractive />
        </div>
        <div className="lg:col-span-4">
          <ChartWatchlistStatus />
        </div>
      </div>
    </div>
  );
}
