"use client";

import NavigationHeader from "@/components/NavigationHeader";
import { Shield, Lock, Eye, Trash2, Bell, Globe } from "lucide-react";
import { motion } from "framer-motion";

const SECTIONS = [
    {
        icon: Eye,
        title: "Information We Collect",
        content: [
            "**Account information**: When you sign in with a third-party provider (Google, GitHub, etc.) we receive your name, email address, and profile picture.",
            "**Code snippets**: Code you choose to save or share is stored on our servers to enable sharing functionality.",
            "**Usage data**: We collect anonymous analytics about how features are used (e.g., which languages are popular) to improve the product.",
            "**Log data**: Standard server logs including IP address, browser type, and pages visited, retained for up to 30 days.",
        ],
    },
    {
        icon: Lock,
        title: "How We Use Your Information",
        content: [
            "To provide, maintain, and improve CodeCraft features.",
            "To authenticate you and link your saved snippets to your account.",
            "To send important service announcements (e.g., planned downtime, policy updates).",
            "To understand aggregate usage patterns — we never sell your personal data to third parties.",
        ],
    },
    {
        icon: Globe,
        title: "Data Sharing",
        content: [
            "**We do not sell your data.** Full stop.",
            "We use Clerk for authentication, Convex for database, and standard cloud infrastructure — each subject to their own privacy policies.",
            "Public snippets are accessible to anyone with the link. Private snippets (Pro feature) are only accessible to you.",
            "We may disclose data if required by law or to protect the safety of our users.",
        ],
    },
    {
        icon: Shield,
        title: "Data Security",
        content: [
            "All data is transmitted over HTTPS/TLS encryption.",
            "We use industry-standard authentication providers (Clerk) to manage credentials — we never store passwords ourselves.",
            "Access to production databases is restricted to authorised team members only.",
            "We conduct regular security reviews and promptly address reported vulnerabilities.",
        ],
    },
    {
        icon: Trash2,
        title: "Your Rights",
        content: [
            "**Access**: Request a copy of the personal data we hold about you.",
            "**Correction**: Ask us to correct inaccurate data.",
            "**Deletion**: Request deletion of your account and associated data at any time by emailing jayeshpatil0718@gmail.com.",
            "**Portability**: Export your saved snippets in JSON format from your profile settings.",
        ],
    },
    {
        icon: Bell,
        title: "Cookies",
        content: [
            "We use only essential cookies required for authentication and session management.",
            "No third-party advertising or tracking cookies are used.",
            "You can disable cookies in your browser settings, though this may affect login functionality.",
        ],
    },
];

function renderLine(line: string) {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
        i % 2 === 1 ? (
            <strong key={i} className="text-gray-900 dark:text-gray-200 font-semibold">
                {part}
            </strong>
        ) : (
            <span key={i}>{part}</span>
        )
    );
}

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
    }),
};

export default function PrivacyPage() {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-[#0a0a0f] selection:bg-purple-500/20 selection:text-purple-200">
            <NavigationHeader />

            {/* Animated ambient glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/6 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                />
            </div>

            <main className="relative pt-24 pb-20 px-4 max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                        >
                            <Shield className="w-3.5 h-3.5" />
                        </motion.div>
                        Privacy Policy
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                    >
                        Your privacy{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                            matters to us
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-gray-600 dark:text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Last updated:{" "}
                        <span className="text-gray-800 dark:text-gray-300 font-medium">February 26, 2026</span>
                    </motion.p>
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        This policy explains what data CodeCraft collects, why we collect it, and how you can
                        control it.
                    </motion.p>
                </motion.div>

                {/* Sections */}
                <div className="space-y-6">
                    {SECTIONS.map(({ icon: Icon, title, content }, idx) => (
                        <motion.div
                            key={title}
                            custom={idx}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{
                                y: -3,
                                boxShadow: "0 8px 32px rgba(168,85,247,0.08)",
                                borderColor: "rgba(168, 85, 247, 0.25)",
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            className="rounded-2xl border border-gray-200 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] p-7 cursor-default"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <motion.div
                                    className="p-2 rounded-lg bg-purple-500/10 ring-1 ring-purple-500/20"
                                    whileHover={{ scale: 1.15, rotate: 8 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    <Icon className="w-5 h-5 text-purple-400" />
                                </motion.div>
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {content.map((line, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-start gap-2.5"
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.35, delay: idx * 0.06 + i * 0.06 }}
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0" />
                                        <span className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {renderLine(line)}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Contact */}
                <motion.div
                    className="mt-10 text-center rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Privacy questions?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm">
                        Contact our team and we&apos;ll respond within 2 business days.
                    </p>
                    <motion.a
                        href="mailto:jayeshpatil0718@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg shadow-purple-500/25 text-sm"
                        whileHover={{ y: -2, scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                        jayeshpatil0718@gmail.com
                    </motion.a>
                </motion.div>
            </main>
        </div>
    );
}
