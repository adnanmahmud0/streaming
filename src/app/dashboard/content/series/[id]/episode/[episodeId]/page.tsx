"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  DownloadIcon,
  TrendingUpIcon,
  ActivityIcon,
  ChevronLeftIcon,
} from "lucide-react";

const performanceData = [
  { name: "Day 1", value: 8000, typical: 5000 },
  { name: "Day 3", value: 12000, typical: 7000 },
  { name: "Day 5", value: 15000, typical: 10000 },
  { name: "Day 7", value: 22000, typical: 14000 },
  { name: "Day 10", value: 28000, typical: 18000 },
  { name: "Day 14", value: 35000, typical: 22000 },
  { name: "Day 21", value: 42000, typical: 28000 },
  { name: "Day 28", value: 52410, typical: 35000 },
];

const liveData = [
  { name: "1", value: 1200 },
  { name: "2", value: 1500 },
  { name: "3", value: 1800 },
  { name: "4", value: 1400 },
  { name: "5", value: 1600 },
  { name: "6", value: 2200 },
  { name: "7", value: 2000 },
  { name: "8", value: 1700 },
  { name: "9", value: 1500 },
  { name: "10", value: 1900 },
];

const retentionData = [
  { time: "0:00", value: 100, typical: 100 },
  { time: "0:30", value: 85, typical: 90 },
  { time: "1:00", value: 80, typical: 85 },
  { time: "2:00", value: 78, typical: 80 },
  { time: "5:00", value: 72, typical: 75 },
  { time: "10:00", value: 68, typical: 70 },
  { time: "15:00", value: 62, typical: 65 },
  { time: "20:00", value: 55, typical: 50 },
  { time: "24:15", value: 70, typical: 50 },
  { time: "30:00", value: 55, typical: 45 },
  { time: "40:00", value: 45, typical: 38 },
  { time: "50:00", value: 38, typical: 30 },
  { time: "60:00", value: 25, typical: 18 },
];

const subscriberData = [
  { name: "VIP Weekly", value: 25 },
  { name: "VIP Monthly", value: 40 },
  { name: "VIP Yearly", value: 20 },
  { name: "Not Subscribed", value: 15 },
];

const demographicsData = [
  { name: "3-17", value: 35 },
  { name: "18-24", value: 90 },
  { name: "25-34", value: 75 },
  { name: "35-44", value: 38 },
  { name: "45-54", value: 18 },
  { name: "55-64", value: 10 },
  { name: "65+", value: 4 },
];

const geographyData = [
  { name: "United States", value: 80 },
  { name: "India", value: 50 },
  { name: "United Kingdom", value: 35 },
  { name: "Canada", value: 25 },
  { name: "Brazil", value: 20 },
  { name: "Germany", value: 18 },
  { name: "France", value: 14 },
  { name: "Australia", value: 10 },
];

const revenueTrendData = [
  { date: "Jan 15", value: 4500 },
  { date: "Jan 22", value: 5200 },
  { date: "Jan 29", value: 6500 },
  { date: "Feb 5", value: 7200 },
  { date: "Feb 12", value: 8000 },
  { date: "Feb 19", value: 9500 },
  { date: "Feb 26", value: 10800 },
  { date: "Mar 3", value: 12450 },
];

const monthlyRevenue = [
  { month: "October", value: 8550 },
  { month: "November", value: 9240 },
  { month: "December", value: 11680 },
  { month: "January", value: 10920 },
  { month: "February", value: 11450 },
  { month: "March", value: 12450 },
];

const revenueSource = [
  { name: "Coins Purchased", value: 6542, percentage: 52.5 },
  { name: "Weekly VIP", value: 2875, percentage: 23 },
  { name: "Monthly VIP", value: 2103, percentage: 17 },
  { name: "Yearly VIP", value: 930, percentage: 7.5 },
];

const revenueByCategory = [
  { name: "Episodes", value: 12450, fill: "#F9253B" },
  { name: "Ads", value: 3550, fill: "#94a3b8" },
];

export default function EpisodeOverviewPage() {
  const [activeTab, setActiveTab] = React.useState("overview");
  const params = useParams();
  const seriesId = params.id;
  const episodeId = params.episodeId;

  // In a real app, you'd fetch series/episode details
  const seriesTitle = "The Witcher";
  const episodeTitle = `Episode ${episodeId}: The Beginning`;

  return (
    <div className="flex flex-col gap-8 py-8 px-4 lg:px-8 bg-[#fafafa] min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-xl border-slate-200 h-12 w-12 shrink-0"
              asChild
            >
              <Link href={`/dashboard/content/series/${seriesId}`}>
                <ChevronLeftIcon className="size-6 text-slate-400" />
              </Link>
            </Button>
            <div className="relative size-14 rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white p-1">
              <Image
                src={`https://api.dicebear.com/7.x/initials/svg?seed=EP${episodeId}`}
                alt={episodeTitle}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <h1 className="text-2xl font-black text-slate-900 truncate max-w-md">
                {seriesTitle} - {episodeTitle}
              </h1>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-black rounded-md uppercase tracking-wider">
                  Episode
                </span>
                <span className="text-slate-400 text-xs font-medium">
                  Published 28 days ago
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Select defaultValue="since-published">
              <SelectTrigger className="h-10 w-45 bg-white border-slate-200 rounded-xl text-sm font-medium">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="since-published">Since Published</SelectItem>
                <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                <SelectItem value="last-28-days">Last 28 Days</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-10 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl gap-2 shadow-lg shadow-red-500/20">
              <DownloadIcon className="size-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-8 border-b border-slate-200">
          {["overview", "engagement", "audience", "revenue"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold capitalize transition-all relative ${
                activeTab === tab
                  ? "text-[#F9253B]"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#F9253B] rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex flex-col gap-8">
        {activeTab === "overview" && (
          <>
            {/* Overview Summary Banner */}
            <div className="w-full p-6 bg-white border border-slate-200 rounded-[1.5rem] shadow-sm">
              <p className="text-xl font-black text-slate-800 tracking-tight">
                This episode has gotten 52,410 views since it was published
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Performance Section */}
              <div className="lg:col-span-8 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-slate-400">Views</p>
                      <p className="text-3xl font-black text-slate-900">52,410</p>
                      <div className="flex items-center gap-1.5 text-green-500 font-bold text-xs mt-1">
                        <TrendingUpIcon className="size-3.5" />
                        18.3%
                        <span className="text-slate-400 font-medium ml-1">5.2K more than usual</span>
                      </div>
                    </div>
                  </Card>
                  <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-slate-400">Watch Time (Hours)</p>
                      <p className="text-3xl font-black text-slate-900">842</p>
                      <div className="flex items-center gap-1.5 text-green-500 font-bold text-xs mt-1">
                        <TrendingUpIcon className="size-3.5" />
                        15.8%
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-black text-slate-800">Performance</h3>
                  </div>
                  <div className="h-75 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                        />
                        <Tooltip 
                          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#F9253B" 
                          strokeWidth={3} 
                          dot={false} 
                        />
                        <Line 
                          type="monotone" 
                          dataKey="typical" 
                          stroke="#94a3b8" 
                          strokeWidth={2} 
                          strokeDasharray="5 5" 
                          dot={false} 
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center gap-6 mt-6">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-[#F9253B]" />
                      <span className="text-xs font-bold text-slate-500">This episode</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-0.5 bg-slate-300 border-t border-dashed border-slate-400" />
                      <span className="text-xs font-bold text-slate-500">Typical performance</span>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Live Update Sidebar */}
              <div className="lg:col-span-4">
                <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem] h-full">
                  <div className="flex items-center gap-2 mb-6">
                    <ActivityIcon className="size-4 text-[#F9253B]" />
                    <h3 className="text-lg font-black text-slate-800">Updating live</h3>
                  </div>
                  <div className="flex flex-col gap-1 mb-8">
                    <p className="text-3xl font-black text-slate-900">4,847</p>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Views in last 48 hours</p>
                  </div>
                  <div className="h-40 w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={liveData}>
                        <Bar dataKey="value" fill="#F9253B" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </div>
          </>
        )}

        {activeTab === "engagement" && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-400">Watch Time (Hours)</p>
                  <p className="text-3xl font-black text-slate-900">842</p>
                  <div className="flex items-center gap-1.5 text-green-500 font-bold text-xs mt-1">
                    <TrendingUpIcon className="size-3.5" />
                    15.8%
                  </div>
                </div>
              </Card>
              <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-400">Average View Duration</p>
                  <p className="text-3xl font-black text-slate-900">32:15</p>
                  <div className="flex items-center gap-1.5 text-green-500 font-bold text-xs mt-1">
                    <TrendingUpIcon className="size-3.5" />
                    12.4%
                  </div>
                </div>
              </Card>
            </div>

            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
              <h3 className="text-lg font-black text-slate-800 mb-8">Watch Time Growth</h3>
              <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none' }} />
                    <Line type="monotone" dataKey="value" stroke="#F9253B" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="typical" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-[#F9253B]" />
                  <span className="text-xs font-bold text-slate-500">This episode</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-0.5 bg-slate-300 border-t border-dashed border-slate-400" />
                  <span className="text-xs font-bold text-slate-500">Typical performance</span>
                </div>
              </div>
            </Card>

            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
              <h3 className="text-lg font-black text-slate-800 mb-8">Key Moments for Audience Retention</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-slate-50/50 rounded-2xl">
                  <p className="text-3xl font-black text-slate-900">32:15</p>
                  <p className="text-xs font-bold text-slate-400">Average duration</p>
                </div>
                <div className="p-6 bg-slate-50/50 rounded-2xl">
                  <p className="text-3xl font-black text-slate-900">45.8%</p>
                  <p className="text-xs font-bold text-slate-400">Average % viewed</p>
                </div>
                <div className="p-6 bg-slate-50/50 rounded-2xl">
                  <p className="text-3xl font-black text-slate-900">85%</p>
                  <p className="text-xs font-bold text-slate-400">Retention at 0:30</p>
                  <p className="text-[10px] font-bold text-green-500 mt-1">Above typical</p>
                </div>
              </div>
              <div className="h-75 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={retentionData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                      domain={[0, 100]}
                    />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#F9253B" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="typical" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>
        )}

        {activeTab === "audience" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
              <h3 className="text-lg font-black text-slate-800 mb-8">Watch Time From Subscribers</h3>
              <div className="flex flex-col gap-6">
                {subscriberData.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-sm font-bold">
                      <span className="text-slate-600">{item.name}</span>
                      <span className="text-slate-900">{item.value}%</span>
                    </div>
                    <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#F9253B] rounded-full" 
                        style={{ width: `${item.value}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-black text-slate-800">Demographics</h3>
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <span className="text-slate-900 border-b-2 border-slate-900 pb-1">Lifetime</span>
                  <span>Date Range</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Gender</span>
                <span className="text-sm font-bold text-[#F9253B]">Male 62%</span>
              </div>
              <div className="flex flex-col gap-4">
                {demographicsData.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span className="w-12 text-xs font-bold text-slate-400">{item.name}</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-red-400/50 rounded-full" 
                        style={{ width: `${item.value}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-[#F9253B]" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Male</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-slate-200" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Female</span>
                </div>
              </div>
            </Card>

            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem] lg:col-span-2">
              <h3 className="text-lg font-black text-slate-800 mb-8">Top Geographies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {geographyData.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <span className="w-32 text-sm font-bold text-slate-600 truncate">{item.name}</span>
                    <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#F9253B] rounded-full" 
                        style={{ width: `${item.value}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === "revenue" && (
          <div className="flex flex-col gap-8">
            <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-slate-400">Total Episode Revenue</p>
                  <p className="text-4xl font-black text-slate-900">$12,450</p>
                  <div className="flex items-center gap-1.5 text-green-600 font-bold text-sm mt-1">
                    <TrendingUpIcon className="size-4" />
                    15%
                    <span className="text-slate-400 font-medium ml-1">from last period</span>
                  </div>
                </div>
                <Button variant="outline" className="h-11 border-slate-200 text-white bg-[#F9253B] hover:bg-red-600 hover:text-white rounded-xl font-bold px-8">
                  Export Report
                </Button>
              </div>

              <div className="h-87.5 w-full">
                <h3 className="text-lg font-black text-slate-800 mb-6">Revenue Trend</h3>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueTrendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis 
                      dataKey="date" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                      tickFormatter={(val) => `$${val}`}
                    />
                    <Tooltip 
                      formatter={(val) => [`$${val}`, 'Revenue']}
                      contentStyle={{ borderRadius: '12px', border: 'none' }}
                    />
                    <Line type="monotone" dataKey="value" stroke="#F9253B" strokeWidth={3} dot={{ fill: '#F9253B', r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
                <h3 className="text-lg font-black text-slate-800 mb-8">Monthly Breakdown</h3>
                <div className="flex flex-col gap-6">
                  {monthlyRevenue.map((item) => (
                    <div key={item.month} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-sm font-bold">
                        <span className="text-slate-500">{item.month}</span>
                        <span className="text-slate-900">${item.value.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#F9253B] rounded-full" 
                          style={{ width: `${(item.value / 12450) * 100}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
                <h3 className="text-lg font-black text-slate-800 mb-8">How I Make Money</h3>
                <div className="flex flex-col gap-8">
                  {revenueSource.map((item) => (
                    <div key={item.name} className="flex flex-col gap-2">
                      <div className="flex items-center justify-between text-sm font-bold">
                        <div className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-red-400" />
                          <span className="text-slate-800">{item.name}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-slate-900">${item.value.toLocaleString()}</span>
                          <span className="text-[10px] text-slate-400">{item.percentage}%</span>
                        </div>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-[#F9253B] rounded-full" 
                          style={{ width: `${item.percentage}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem] lg:col-span-2">
                <h3 className="text-lg font-black text-slate-800 mb-8">Revenue by Category</h3>
                <div className="flex flex-col md:flex-row items-center gap-12">
                  <div className="size-48 shrink-0">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={revenueByCategory}
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {revenueByCategory.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex-1 w-full flex flex-col gap-4">
                    {revenueByCategory.map((item) => (
                      <div key={item.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className={`size-3 rounded-full ${item.name === 'Episodes' ? 'bg-[#F9253B]' : 'bg-slate-400'}`} />
                          <span className="font-bold text-slate-700">{item.name}</span>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="font-black text-slate-900">${item.value.toLocaleString()}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {((item.value / (12450 + 3550)) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:col-span-2">
                <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Average Revenue Per User</p>
                  <p className="text-2xl font-black text-slate-900">$0.32</p>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs mt-1">
                    <TrendingUpIcon className="size-3" />
                    8.2%
                  </div>
                </Card>
                <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Conversion Rate</p>
                  <p className="text-2xl font-black text-slate-900">4.5%</p>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs mt-1">
                    <TrendingUpIcon className="size-3" />
                    2.1%
                  </div>
                </Card>
                <Card className="shadow-none border-slate-200 bg-white p-6 rounded-[1.5rem]">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Transactions</p>
                  <p className="text-2xl font-black text-slate-900">3,410</p>
                  <div className="flex items-center gap-1 text-green-600 font-bold text-xs mt-1">
                    <TrendingUpIcon className="size-3" />
                    12.3%
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
