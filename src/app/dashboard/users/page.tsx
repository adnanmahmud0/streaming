/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CoinsIcon,
  DownloadIcon,
  EllipsisVerticalIcon,
  SearchIcon,
  TrendingUpIcon,
  UsersIcon,
  ClapperboardIcon,
  CrownIcon,
  Trash2Icon,
  PencilIcon,
  UserPlusIcon,
} from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const stats = [
  {
    title: "Total Users",
    value: "1,234,567",
    trend: "+12.5%",
    icon: <UsersIcon className="size-5 text-muted-foreground" />,
  },
  {
    title: "Active Users",
    value: "987,654",
    trend: "+8.3%",
    icon: <UsersIcon className="size-5 text-muted-foreground" />,
  },
  {
    title: "New This Month",
    value: "540",
    trend: "+5.2%",
    icon: <ClapperboardIcon className="size-5 text-orange-500" />,
  },
  {
    title: "Total Subscribe",
    value: "456,789",
    trend: "+15.8%",
    icon: <CrownIcon className="size-5 text-yellow-500" />,
  },
];

const initialUsers = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SJ",
    status: "Active",
    coins: 300,
    subscription: "Free",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.c@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=MC",
    status: "Active",
    coins: 300,
    subscription: "Premium",
  },
  {
    id: 3,
    name: "Dr. Emma Davis",
    email: "emma.d@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=ED",
    status: "Active",
    coins: 300,
    subscription: "Premium",
  },
  {
    id: 4,
    name: "Alex Martinez",
    email: "alex.m@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=AM",
    status: "Active",
    coins: 300,
    subscription: "Premium",
  },
  {
    id: 5,
    name: "Priya Patel",
    email: "priya.p@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=PP",
    status: "Inactive",
    coins: 300,
    subscription: "Premium",
  },
  {
    id: 6,
    name: "James Wilson",
    email: "james.w@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=JW",
    status: "Active",
    coins: 300,
    subscription: "Free",
  },
  {
    id: 7,
    name: "Lisa Anderson",
    email: "lisa.a@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=LA",
    status: "Active",
    coins: 300,
    subscription: "Free",
  },
  {
    id: 8,
    name: "David Kim",
    email: "david.k@email.com",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=DK",
    status: "Active",
    coins: 300,
    subscription: "Free",
  },
];

export default function UsersPage() {
  const [users, setUsers] = React.useState(initialUsers);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState("filter");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isAddUserOpen, setIsAddUserOpen] = React.useState(false);
  const [isEditUserOpen, setIsEditUserOpen] = React.useState(false);
  const [editingUser, setEditingUser] = React.useState<any>(null);
  const [newUser, setNewUser] = React.useState({
    name: "",
    email: "",
    subscription: "Free",
    status: "Active",
    coins: 0,
  });

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "filter" || user.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    const user = {
      ...newUser,
      id: Date.now(),
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${newUser.name}`,
    };
    setUsers([user, ...users]);
    setIsAddUserOpen(false);
    setNewUser({
      name: "",
      email: "",
      subscription: "Free",
      status: "Active",
      coins: 0,
    });
    toast.success("User added successfully");
  };

  const handleEditUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser.name || !editingUser.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setUsers(
      users.map((u) => (u.id === editingUser.id ? { ...editingUser } : u)),
    );
    setIsEditUserOpen(false);
    setEditingUser(null);
    toast.success("User updated successfully");
  };

  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
    toast.success("User deleted successfully");
  };

  const handleToggleStatus = (id: number) => {
    setUsers(
      users.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u,
      ),
    );
    toast.success("Status updated successfully");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Add User Dialog */}
      <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl p-8 border-none shadow-2xl">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black text-slate-900">
              Add New User
            </DialogTitle>
            <DialogDescription className="text-slate-500 font-medium">
              Create a new user account for your platform
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleAddUser} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                  placeholder="Sarah Johnson"
                  className="h-12 bg-slate-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-[#F9253B]/20"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700"
                >
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                  placeholder="sarah@example.com"
                  className="h-12 bg-slate-50 border-none rounded-xl px-4 focus:ring-2 focus:ring-[#F9253B]/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-700">
                    Subscription
                  </Label>
                  <Select
                    value={newUser.subscription}
                    onValueChange={(v) =>
                      setNewUser({ ...newUser, subscription: v })
                    }
                  >
                    <SelectTrigger className="h-12 bg-slate-50 border-none rounded-xl">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white rounded-xl border-slate-100">
                      <SelectItem value="Free">Free</SelectItem>
                      <SelectItem value="Premium">Premium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-bold text-slate-700">
                    Initial Coins
                  </Label>
                  <Input
                    type="number"
                    value={newUser.coins}
                    onChange={(e) =>
                      setNewUser({
                        ...newUser,
                        coins: parseInt(e.target.value) || 0,
                      })
                    }
                    className="h-12 bg-slate-50 border-none rounded-xl px-4"
                  />
                </div>
              </div>
            </div>
            <DialogFooter className="pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAddUserOpen(false)}
                className="h-12 px-6 rounded-xl font-bold border-slate-200"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="h-12 px-8 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl shadow-lg shadow-red-500/20"
              >
                Create User
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditUserOpen} onOpenChange={setIsEditUserOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl p-8 border-none shadow-2xl">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-black text-slate-900">
              Edit User
            </DialogTitle>
            <DialogDescription className="text-slate-500 font-medium">
              Update user account details
            </DialogDescription>
          </DialogHeader>
          {editingUser && (
            <form onSubmit={handleEditUser} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-name"
                    className="text-sm font-bold text-slate-700"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="edit-name"
                    value={editingUser.name}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, name: e.target.value })
                    }
                    className="h-12 bg-slate-50 border-none rounded-xl px-4"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="edit-email"
                    className="text-sm font-bold text-slate-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="edit-email"
                    type="email"
                    value={editingUser.email}
                    onChange={(e) =>
                      setEditingUser({ ...editingUser, email: e.target.value })
                    }
                    className="h-12 bg-slate-50 border-none rounded-xl px-4"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-slate-700">
                      Subscription
                    </Label>
                    <Select
                      value={editingUser.subscription}
                      onValueChange={(v) =>
                        setEditingUser({ ...editingUser, subscription: v })
                      }
                    >
                      <SelectTrigger className="h-12 bg-slate-50 border-none rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-xl border-slate-100">
                        <SelectItem value="Free">Free</SelectItem>
                        <SelectItem value="Premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-slate-700">
                      Status
                    </Label>
                    <Select
                      value={editingUser.status}
                      onValueChange={(v) =>
                        setEditingUser({ ...editingUser, status: v })
                      }
                    >
                      <SelectTrigger className="h-12 bg-slate-50 border-none rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white rounded-xl border-slate-100">
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter className="pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsEditUserOpen(false)}
                  className="h-12 px-6 rounded-xl font-bold border-slate-200"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="h-12 px-8 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl"
                >
                  Update User
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Header */}
      <div className="px-4 lg:px-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
            User Management
          </h1>
          <p className="text-slate-500 font-medium">
            Manage users, roles, and access permissions
          </p>
        </div>
        <Button
          onClick={() => setIsAddUserOpen(true)}
          className="h-12 bg-[#F9253B] hover:bg-red-600 text-white font-bold rounded-xl gap-2 px-6 shadow-lg shadow-red-500/20"
        >
          <UserPlusIcon className="size-5" />
          Add New User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {stats.map((card) => (
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

      {/* User Table */}
      <div className="px-4 lg:px-6">
        <Card className="shadow-none border-slate-200 overflow-hidden bg-white rounded-[1.5rem]">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-b border-slate-100">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Search by name or email..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="h-14 px-6 gap-2 bg-white border-slate-200 rounded-xl font-bold text-slate-600"
              >
                <DownloadIcon className="size-5" />
                Export
              </Button>
            </div>
          </div>

          <Table>
            <TableHeader className="bg-slate-50/50">
              <TableRow className="border-none">
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] pl-6">
                  User
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Account Status
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Coin
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px]">
                  Subscription Status
                </TableHead>
                <TableHead className="h-14 font-black text-slate-400 uppercase tracking-widest text-[10px] text-right pr-6">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className="hover:bg-slate-50/50 border-b border-slate-50 last:border-none"
                  >
                    <TableCell className="py-4 pl-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 rounded-2xl border-2 border-white shadow-sm ring-1 ring-slate-100">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="bg-slate-50 text-slate-500 font-bold">
                            {user.name.slice(0, 1).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 text-lg">
                            {user.name}
                          </span>
                          <span className="text-sm text-slate-400 font-medium">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        onClick={() => handleToggleStatus(user.id)}
                        className={`
                          px-4 py-1.5 rounded-full border-none font-bold text-xs uppercase tracking-wider cursor-pointer transition-all hover:scale-105
                          ${
                            user.status === "Active"
                              ? "bg-green-50 text-green-600 hover:bg-green-100"
                              : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                          }
                        `}
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 font-black text-yellow-500">
                        <div className="flex size-6 items-center justify-center rounded-full bg-yellow-400 shadow-sm shadow-yellow-200">
                          <CoinsIcon className="size-3.5 text-white fill-white" />
                        </div>
                        <span className="text-lg">{user.coins}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        className={`
                        text-sm font-black uppercase tracking-widest
                        ${user.subscription === "Premium" ? "text-[#F9253B]" : "text-slate-400"}
                      `}
                      >
                        {user.subscription}
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
                            onClick={() => {
                              setEditingUser(user);
                              setIsEditUserOpen(true);
                            }}
                            className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                          >
                            <PencilIcon className="size-4" />
                            Edit User
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleToggleStatus(user.id)}
                            className="h-10 rounded-xl font-bold text-slate-600 gap-3 cursor-pointer"
                          >
                            <ActivityIcon className="size-4" />
                            Toggle Status
                          </DropdownMenuItem>
                          <div className="h-px bg-slate-50 my-1" />
                          <DropdownMenuItem
                            onClick={() => handleDeleteUser(user.id)}
                            className="h-10 rounded-xl font-bold text-red-500 gap-3 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                          >
                            <Trash2Icon className="size-4" />
                            Delete User
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
                        <UsersIcon className="size-8 text-slate-200" />
                      </div>
                      <p className="text-slate-400 font-bold">No users found</p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between p-6 border-t border-slate-50 bg-slate-50/20">
            <span className="text-sm font-bold text-slate-400">
              Showing {filteredUsers.length} of {users.length} users
            </span>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="h-11 px-5 rounded-xl font-bold text-slate-500 border-slate-200"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
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
                onClick={() => setCurrentPage(currentPage + 1)}
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

function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
}
