"use client";

import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import {
  Blocks,
  Code2,
  Play,
  Share2,
  Palette,
  Globe,
  ChevronRight,
  Zap,
  Shield,
} from "lucide-react";

const FEATURES = [
  {
    icon: Play,
    title: "Run Code Instantly",
    description:
      "Execute code in Multiples languages directly in your browser. No setup required.",
    color: "from-blue-500 to-cyan-500",
    glow: "group-hover:shadow-blue-500/25",
  },
  {
    icon: Share2,
    title: "Share Snippets",
    description:
      "Save and share your code snippets with a unique link — collaborate in seconds.",
    color: "from-purple-500 to-pink-500",
    glow: "group-hover:shadow-purple-500/25",
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description:
      "Choose from VS Dark, GitHub, Monokai and more. Your editor, your style.",
    color: "from-amber-500 to-orange-500",
    glow: "group-hover:shadow-amber-500/25",
  },
  {
    icon: Globe,
    title: "10+ Languages",
    description:
      "JavaScript, Python, Rust, Go, TypeScript and more — all in one place.",
    color: "from-green-500 to-emerald-500",
    glow: "group-hover:shadow-green-500/25",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Powered by Piston engine for near-instant code execution with real output.",
    color: "from-yellow-500 to-amber-500",
    glow: "group-hover:shadow-yellow-500/25",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your code is yours. Sign in with your account and keep snippets private.",
    color: "from-red-500 to-rose-500",
    glow: "group-hover:shadow-red-500/25",
  },
];

const STATS = [
  { label: "Languages", value: "10+" },
  { label: "Code Themes", value: "8+" },
  { label: "Developers", value: "1K+" },
];

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#080810] text-white overflow-hidden">
      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/5 bg-white/[0.02] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 ring-1 ring-blue-500/20">
              <Blocks className="size-5 text-blue-400 -rotate-6" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
              CodeCraft
            </span>
          </div>

          {/* Nav actions */}
          <div className="flex items-center gap-3">
            <SignedIn>
              <Link
                href="/editor"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-blue-500/20"
              >
                <Code2 className="w-4 h-4" />
                Open Editor
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/editor">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-200">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 shadow-lg shadow-blue-500/10">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            Interactive Code Editor
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="text-white">Write. Run.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text">
              Share Code.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A powerful, browser-based code playground supporting 10+ languages.
            Write, run and share your code snippets with the world — instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/editor">
                <button className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Code2 className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Get Started — It&apos;s Free</span>
                  <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/editor"
                className="group relative flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                <Code2 className="w-5 h-5" />
                Open Editor
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SignedIn>
          </div>

          {/* Stats row */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview / Hero Visual */}
      <section className="relative z-10 px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-[#0d0d1a] shadow-2xl shadow-black/50 overflow-hidden">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/5 bg-white/[0.02]">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <div className="ml-3 text-xs text-gray-500 font-mono">main.js — CodeCraft Editor</div>
            </div>
            {/* Code lines */}
            <div className="p-6 font-mono text-sm leading-relaxed">
              <div className="flex">
                <span className="text-gray-600 select-none w-8 text-right mr-5">1</span>
                <span><span className="text-purple-400">const</span> <span className="text-blue-300">greet</span> <span className="text-white">=</span> <span className="text-yellow-300">(</span><span className="text-orange-300">name</span><span className="text-yellow-300">)</span> <span className="text-white">=&gt;</span> <span className="text-yellow-300">{"{"}</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none w-8 text-right mr-5">2</span>
                <span className="ml-4"><span className="text-purple-400">return</span> <span className="text-green-300">`Hello, <span className="text-orange-300">{"${name}"}</span>! 👋`</span><span className="text-white">;</span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none w-8 text-right mr-5">3</span>
                <span><span className="text-yellow-300">{"}"}</span><span className="text-white">;</span></span>
              </div>
              <div className="flex mt-2">
                <span className="text-gray-600 select-none w-8 text-right mr-5">4</span>
                <span></span>
              </div>
              <div className="flex">
                <span className="text-gray-600 select-none w-8 text-right mr-5">5</span>
                <span><span className="text-blue-300">console</span><span className="text-white">.</span><span className="text-yellow-300">log</span><span className="text-white">(</span><span className="text-blue-300">greet</span><span className="text-white">(</span><span className="text-green-300">&quot;World&quot;</span><span className="text-white">));</span></span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-xs text-gray-500 mb-2">Output</div>
                <div className="text-green-400 text-sm">Hello, World! 👋</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                code smarter
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Built for developers who want speed, simplicity, and power — all in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`group relative rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${feature.glow} cursor-default`}
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} bg-opacity-10 mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent p-12 shadow-2xl shadow-blue-500/10">
            <Blocks className="w-10 h-10 text-blue-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to start coding?
            </h2>
            <p className="text-gray-400 mb-8">
              Join developers already using CodeCraft to write, run, and share code.
            </p>
            <SignedOut>
              <SignInButton mode="modal" forceRedirectUrl="/editor">
                <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  <Code2 className="w-5 h-5" />
                  Sign In & Start Coding
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link
                href="/editor"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-blue-500/25"
              >
                <Code2 className="w-5 h-5" />
                Open Editor
              </Link>
            </SignedIn>
          </div>
        </div>
      </section>
    </div>
  );
}
