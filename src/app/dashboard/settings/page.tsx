"use client";

import * as React from "react";
import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  CameraIcon,
  LockIcon,
  UserIcon,
  MailIcon,
  SaveIcon,
} from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const [name, setName] = React.useState("Sadat Khan");
  const [profileImage, setProfileImage] = React.useState(
    "https://api.dicebear.com/7.x/initials/svg?seed=SK",
  );
  const [passwords, setPasswords] = React.useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSave = () => {
    if (passwords.new && passwords.new !== passwords.confirm) {
      toast.error("New passwords do not match");
      return;
    }

    // Simulate API call
    toast.success("Settings updated successfully");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleChangePhoto = () => {
    // Simulate file picker
    const seeds = ["SK", "AB", "JD", "MK"];
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)];
    setProfileImage(
      `https://api.dicebear.com/7.x/initials/svg?seed=${randomSeed}`,
    );
    toast.success("Profile photo updated");
  };

  return (
    <div className="flex flex-col gap-8 py-8 md:gap-10 md:py-10">
      {/* Header */}
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
          Settings
        </h1>
        <p className="text-slate-500 font-medium">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="px-4 lg:px-6 flex flex-col gap-8">
        {/* Profile Section */}
        <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                  <UserIcon className="size-5" />
                </div>
                Profile Information
              </h2>
              <p className="text-slate-400 font-medium text-sm ml-13">
                Update your profile photo and personal details.
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {/* Profile Image Upload */}
              <div className="flex flex-col gap-4">
                <Label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Profile Image
                </Label>
                <div className="flex items-center gap-8">
                  <div className="relative group">
                    <div className="size-28 rounded-3xl overflow-hidden ring-4 ring-slate-50 relative border-4 border-white shadow-xl">
                      <Image
                        src={profileImage}
                        alt="Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <button
                      onClick={handleChangePhoto}
                      className="absolute inset-0 bg-black/40 rounded-3xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all cursor-pointer backdrop-blur-[2px]"
                    >
                      <CameraIcon className="size-8 text-white drop-shadow-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={handleChangePhoto}
                      variant="outline"
                      className="h-12 px-6 border-slate-200 font-bold rounded-xl hover:bg-slate-50 transition-colors"
                    >
                      Change Photo
                    </Button>
                    <p className="text-xs text-slate-400 font-medium max-w-50">
                      Recommended: JPG, PNG. Max size of 800KB.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="name"
                    className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field - Disabled */}
                <div className="flex flex-col gap-3">
                  <Label
                    htmlFor="email"
                    className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2"
                  >
                    Email Address
                    <span className="text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded-full font-black tracking-widest">
                      READ ONLY
                    </span>
                  </Label>
                  <div className="relative">
                    <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      defaultValue="streming@gmail.com"
                      disabled
                      className="h-14 pl-12 bg-slate-100/50 border-slate-200 text-slate-400 cursor-not-allowed font-medium text-lg border-dashed"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Password Section */}
        <Card className="shadow-none border-slate-200 bg-white p-8 rounded-[1.5rem]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 border border-slate-100">
                  <LockIcon className="size-5" />
                </div>
                Security & Password
              </h2>
              <p className="text-slate-400 font-medium text-sm ml-13">
                Manage your account security and password.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="current-password"
                  className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                >
                  Current Password
                </Label>
                <Input
                  id="current-password"
                  type="password"
                  value={passwords.current}
                  onChange={(e) =>
                    setPasswords({ ...passwords, current: e.target.value })
                  }
                  className="h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="new-password"
                  className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                >
                  New Password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords({ ...passwords, new: e.target.value })
                  }
                  className="h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label
                  htmlFor="confirm-password"
                  className="text-sm font-bold text-slate-700 uppercase tracking-wider"
                >
                  Confirm Password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                  className="h-14 bg-slate-50 border-none rounded-xl text-lg font-medium text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Button
            variant="outline"
            className="h-14 px-10 border-slate-200 text-slate-600 font-bold rounded-xl transition-all hover:bg-slate-50"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="h-14 px-12 bg-[#F9253B] hover:bg-red-600 text-white font-black text-lg rounded-xl shadow-xl shadow-red-500/20 gap-3 transition-all hover:scale-105 active:scale-95"
          >
            <SaveIcon className="size-5" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
