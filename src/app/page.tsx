"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function WelcomePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2500); // 2.5 seconds delay

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-1000 ease-out">
        {/* Logo Container */}
        <div className="relative">
          <div className="absolute -inset-4 bg-red-500/10 rounded-[2.5rem] blur-2xl animate-pulse" />
          <div className="relative size-32 bg-white rounded-[2rem] shadow-2xl shadow-red-500/10 flex items-center justify-center border border-slate-50 p-4">
            <Image
              src="/vercel.svg"
              alt="Streaming Logo"
              width={100}
              height={100}
              className="size-20"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase">
            Streaming
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-red-500 rounded-full" />
            <span className="text-slate-400 font-bold text-sm uppercase tracking-[0.3em]">
              Admin Dashboard
            </span>
            <div className="h-1 w-12 bg-red-500 rounded-full" />
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#F9253B] rounded-full animate-progress-loading" />
          </div>
          <p className="text-slate-400 font-medium animate-pulse text-sm">
            Initializing your experience...
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes progress-loading {
          0% {
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% {
            width: 0%;
            transform: translateX(100%);
          }
        }
        .animate-progress-loading {
          animation: progress-loading 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
