"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration */}
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-lg">
            <Image
              src="/Reset password-bro 1.png"
              alt="Reset Password Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Reset Password Form */}
        <div className="flex flex-col items-center lg:items-start max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="mb-12">
            <div className="flex size-20 items-center justify-center rounded-xl ">
              <Image
                src="/vercel.svg"
                alt="logo"
                className="size-20"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="text-center lg:text-left mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Reset Password
            </h1>
            <p className="text-slate-500">
              Create a new secure password for your account
            </p>
          </div>

          <form className="w-full space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="new-password"
                className="text-sm font-bold text-slate-700"
              >
                New Password
              </Label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  className="h-14 bg-slate-50 border-none text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20 rounded-xl px-4 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOffIcon className="size-5" />
                  ) : (
                    <EyeIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirm-password"
                className="text-sm font-bold text-slate-700"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  className="h-14 bg-slate-50 border-none text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20 rounded-xl px-4 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="size-5" />
                  ) : (
                    <EyeIcon className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <Button
              asChild
              className="w-full h-14 bg-[#F9253B] hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]"
            >
              <Link href="/login">Reset Password</Link>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
