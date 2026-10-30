"use client";

import Link from "next/link";
import { GeistSans } from "geist/font/sans";
import Spline from '@splinetool/react-spline';

export default function ComingSoon() {
  return (
    <main
      className={`relative min-h-screen w-full bg-black text-white overflow-hidden ${GeistSans.className}`}
    >
      <style jsx>{`
        @keyframes industrial-load {
          0% { left: -30%; width: 30%; }
          50% { left: 30%; width: 40%; }
          100% { left: 100%; width: 10%; }
        }
        .animate-industrial-load {
          animation: industrial-load 2s infinite ease-in-out;
        }
      `}</style>

      {/* -------------------------------------------
        LAYER 1: SPLINE SCENE (Global Background)
        UPDATE: Changed 'inset-0' to '-inset-12'.
        - This makes the viewer larger than the screen.
        - The "Built with Spline" logo (bottom-right) gets pushed off-screen.
        -------------------------------------------
      */}
      <div className="absolute -inset-12 z-0">
        <Spline 
          scene="https://prod.spline.design/4YtZJNDKoOOgX-MQ/scene.splinecode"
          className="h-full w-full"
        />
      </div>

      {/* -------------------------------------------
        LAYER 2: CONTENT GRID
        -------------------------------------------
      */}
      <div className="relative z-10 grid h-screen w-full grid-cols-1 md:grid-cols-2 pointer-events-none">
        
        {/* --- SECTION 1: TEXT (Left Side) --- 
            Kept your 'md:pl-64' spacing
        */}
        <div className="flex flex-col justify-center px-6 md:pl-64 md:pr-10 pointer-events-auto">
          <div className="max-w-lg">
             {/* Logo */}
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-8 text-white drop-shadow-2xl">
              InfyNex
            </h1>

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white tracking-tight drop-shadow-lg">
              System Upgrading
            </h2>

            {/* Description */}
            <p className="text-neutral-200 text-base md:text-lg leading-relaxed mb-10 font-medium drop-shadow-md">
              InfyNex Electric Industries is upgrading its digital infrastructure.
              We are building a robust platform to serve you better.
            </p>

            {/* PROGRESS BAR */}
            <div className="w-full h-[2px] bg-neutral-700/50 relative overflow-hidden mb-12 rounded-full backdrop-blur-sm">
              <div className="absolute top-0 bottom-0 bg-white animate-industrial-load shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            </div>

            {/* CTA Button */}
            <Link
              href="mailto:contact@infynex.org"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105 shadow-xl"
            >
              Contact Support
            </Link>
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-8 left-6 md:left-64 text-xs text-neutral-400 font-mono tracking-widest uppercase">
            © 2026 InfyNex Electric Industries.
          </div>
        </div>

        {/* --- SECTION 2: EMPTY (Right Side) --- */}
        <div className="hidden md:block">
           {/* Empty space */}
        </div>

      </div>
    </main>
  );
}
