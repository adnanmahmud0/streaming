"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UsersIcon,
  ChartColumnIncreasingIcon,
  ClapperboardIcon,
  CrownIcon,
  TrendingUpIcon,
} from "lucide-react";

export function SectionCards() {
  const cards = [
    {
      title: "Total Users",
      value: "12,450",
      trend: "0.5%",
      icon: <UsersIcon className="size-5 text-muted-foreground" />,
    },
    {
      title: "Total Revenue",
      value: "$4,367",
      trend: "0.5%",
      icon: <ChartColumnIncreasingIcon className="size-5 text-green-600" />,
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

  return (
    <div className="flex flex-col gap-8">
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
          Welcome to Dashboard
        </h1>
        <p className="text-slate-500 font-medium">
          Here's what's happening with your streaming platform today
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {cards.map((card) => (
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
    </div>
  );
}
