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
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      {cards.map((card) => (
        <Card
          key={card.title}
          className="bg-gradient-to-t from-primary/5 to-card shadow-xs border-none"
        >
          <CardHeader className="pb-2">
            <CardDescription className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardDescription>
            <CardTitle className="text-3xl font-bold tracking-tight">
              {card.value}
            </CardTitle>
            <CardAction>
              <div className="flex size-12 items-center justify-center rounded-2xl bg-muted/50 shadow-xs">
                {card.icon}
              </div>
            </CardAction>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <TrendingUpIcon className="size-4" />
              {card.trend}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
