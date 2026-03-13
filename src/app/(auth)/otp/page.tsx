"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon } from "lucide-react";

export default function OTPPage() {
  const [otp, setOtp] = React.useState(["", "", "", "", "", ""]);
  const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Illustration */}
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-lg">
            <Image
              src="/Enter-OTP-bro.png"
              alt="OTP Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Right Side: OTP Form */}
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
              Verify OTP
            </h1>
            <p className="text-slate-500">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <form className="w-full space-y-8">
            <div className="space-y-4">
              <Label className="text-sm font-bold text-slate-700">
                Verification Code
              </Label>
              <div className="flex justify-between gap-2">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="size-12 lg:size-14 text-center text-2xl font-bold bg-slate-50 border-none focus:ring-2 focus:ring-[#F9253B]/20 rounded-xl px-0"
                  />
                ))}
              </div>
            </div>

            <Button
              asChild
              className="w-full h-14 bg-[#F9253B] hover:bg-red-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-red-500/20 transition-all active:scale-[0.98]"
            >
              <Link href="/reset-password">Verify Code</Link>
            </Button>

            <div className="flex flex-col items-center lg:items-start gap-4">
              <p className="text-sm text-slate-500">
                {" Didn't receive the code? "}
                <button
                  type="button"
                  className="text-[#F9253B] font-bold hover:underline"
                >
                  Resend
                </button>
              </p>
              <Link
                href="/forgot-password"
                className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
              >
                <ChevronLeftIcon className="size-4" />
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
