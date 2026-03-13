"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration */}
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-lg">
            <Image
              src="/Forgot-password-bro.png"
              alt="Forgot Password Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: Forgot Password Form */}
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
              Forgot Password?
            </h1>
            <p className="text-slate-500">
              Enter your email to receive a 6-digit OTP code
            </p>
          </div>

          <form className="w-full space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-bold text-slate-700"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="h-14 bg-slate-50 border-none text-slate-600 focus:ring-2 focus:ring-[#F9253B]/20 rounded-xl px-4"
              />
            </div>

            <Button
              asChild
              className="w-full h-14 bg-[#F9253B] hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]"
            >
              <Link href="/otp">Send Code</Link>
            </Button>

            <div className="flex justify-center lg:justify-start">
              <Link
                href="/login"
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ChevronLeftIcon className="size-4" />
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
