"use client";

import * as React from "react";
import { Label, Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { genre: "Action", value: 25, color: "#F9253B" },
  { genre: "Drama", value: 20, color: "#1e293b" },
  { genre: "Horror", value: 25, color: "#94a3b8" },
  { genre: "Comedy", value: 15, color: "#f59e0b" },
  { genre: "Sci-Fi", value: 15, color: "#10b981" },
];

const chartConfig = {
  Action: {
    label: "Action",
    color: "#F9253B",
  },
  Drama: {
    label: "Drama",
    color: "#1e293b",
  },
  Horror: {
    label: "Horror",
    color: "#94a3b8",
  },
  Comedy: {
    label: "Comedy",
    color: "#f59e0b",
  },
  "Sci-Fi": {
    label: "Sci-Fi",
    color: "#10b981",
  },
} satisfies ChartConfig;

export function ChartWatchlistStatus() {
  return (
    <Card className="flex flex-col h-full shadow-none border-slate-200 bg-white rounded-[1.5rem] overflow-hidden">
      <CardHeader className="p-8 border-b border-slate-100 flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-xl font-black text-slate-800 tracking-tight">
            Watchlist Status
          </CardTitle>
        </div>
        <CardAction>
          <Select defaultValue="this-week">
            <SelectTrigger
              className="ml-auto h-10 w-[130px] rounded-xl bg-slate-50 border-none text-slate-600 font-bold"
              aria-label="Select time range"
            >
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-xl border-slate-100 shadow-xl">
              <SelectItem value="this-week" className="rounded-lg font-medium">
                This Week
              </SelectItem>
              <SelectItem value="last-week" className="rounded-lg font-medium">
                Last Week
              </SelectItem>
              <SelectItem value="last-month" className="rounded-lg font-medium">
                Last Month
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col items-center justify-center p-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[320px] w-full"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideLabel
                  className="rounded-2xl border-none shadow-2xl"
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="genre"
              innerRadius={80}
              outerRadius={110}
              strokeWidth={8}
              stroke="#fff"
              paddingAngle={0}
              startAngle={90}
              endAngle={450}
              labelLine={false}
            >
              {chartData.map((entry) => (
                <Cell key={entry.genre} fill={entry.color} />
              ))}
            </Pie>
            <ChartLegend
              content={
                <ChartLegendContent
                  nameKey="genre"
                  className="flex-wrap gap-x-6 gap-y-3 justify-center mt-8"
                />
              }
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
