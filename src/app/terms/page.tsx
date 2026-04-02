"use client";

import NavigationHeader from "@/components/NavigationHeader";
import { FileText, CreditCard, Code2, Ban, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const SECTIONS = [
    {
        icon: Code2,
        title: "Acceptance of Terms",
        content: [
            "By accessing or using CodeCraft, you agree to be bound by these Terms of Service.",
            "If you do not agree with any part of these terms, you may not use our service.",
            "We reserve the right to update these terms at any time. Continued use of CodeCraft after changes constitutes your acceptance of the new terms.",
            "These terms apply to all visitors, users, and others who access or use CodeCraft.",
        ],
    },
    {
        icon: FileText,
        title: "Use of the Service",
        content: [
            "CodeCraft grants you a personal, non-exclusive, non-transferable licence to use the platform for writing, running, and sharing code.",
            "You are responsible for all activity that occurs under your account.",
            "You must be at least 13 years old to use CodeCraft. Users under 18 require parental consent.",
            "Free accounts may be subject to rate limits on code execution to ensure fair use for all users.",
        ],
    },
    {
        icon: Ban,
        title: "Prohibited Conduct",
        content: [
            "You may not use CodeCraft to run malicious code, launch attacks, or attempt to compromise our infrastructure or other users' systems.",
            "Do not use the platform to generate, store, or share content that is illegal, harmful, or violates any third-party rights.",
            "Automated scraping, excessive API requests, or bot activity that degrades service quality for others is not permitted.",
            "Do not attempt to reverse-engineer, decompile, or extract source code from CodeCraft.",
            "Sharing or publishing snippets that contain credentials, private keys, or personally identifiable information of others is prohibited.",
        ],
    },
    {
        icon: CreditCard,
        title: "Payments & Pro Plan",
        content: [
            "The CodeCraft Pro plan is a **one-time payment** for lifetime access — no recurring charges.",
            "All payments are processed securely via Stripe. We do not store your card details.",
            "Due to the digital nature of the product, **refunds are generally not offered** once Pro features have been accessed.",
            "If you experience issues with your purchase, contact support@codecraft.dev within 7 days and we'll work to resolve it.",
        ],
    },
    {
        icon: Code2,
        title: "Intellectual Property",
        content: [
            "Code you write and save in CodeCraft remains **your intellectual property**.",
            "By making a snippet public, you grant CodeCraft a limited licence to display and serve that content to users accessing the link.",
            "The CodeCraft platform, logo, design, and underlying codebase are owned by CodeCraft and protected by copyright law.",
            "You may not copy or redistribute CodeCraft's interface or branding without prior written consent.",
        ],
    },

    {
        icon: RefreshCw,
        title: "Termination",
        content: [
            "You may delete your account at any time from your profile settings.",
            "We reserve the right to suspend or terminate accounts that violate these terms, with or without prior notice.",
            "Upon termination, your right to use CodeCraft ceases immediately. Public snippets may remain accessible unless you delete them beforehand.",
            "Provisions that by their nature should survive termination (IP rights, disclaimers, liability limits) will remain in effect.",
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

export default function TermsPage() {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
            <NavigationHeader />

            {/* Animated ambient glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.95, 0.5] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
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
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                        >
                            <FileText className="w-3.5 h-3.5" />
                        </motion.div>
                        Terms of Service
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                    >
                        Terms of{" "}
                        <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-transparent bg-clip-text">
                            Service
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
                        Please read these terms carefully before using CodeCraft. They govern your access to and
                        use of the platform.
                    </motion.p>
                </motion.div>

                {/* Quick nav */}
                <motion.div
                    className="rounded-2xl border border-gray-200 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] p-5 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-3">
                        Sections
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {SECTIONS.map(({ title }, i) => (
                            <motion.span
                                key={title}
                                className="text-xs px-3 py-1 rounded-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-white/5 cursor-default"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                                whileHover={{
                                    scale: 1.08,
                                    borderColor: "rgba(245,158,11,0.4)",
                                    color: "rgb(251,191,36)",
                                    backgroundColor: "rgba(245,158,11,0.08)",
                                }}
                            >
                                {title}
                            </motion.span>
                        ))}
                    </div>
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
                                boxShadow: "0 8px 32px rgba(245,158,11,0.08)",
                                borderColor: "rgba(245, 158, 11, 0.25)",
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 28 }}
                            className="rounded-2xl border border-gray-200 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] p-7 cursor-default"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <motion.div
                                    className="p-2 rounded-lg bg-amber-500/10 ring-1 ring-amber-500/20"
                                    whileHover={{ scale: 1.15, rotate: 8 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    <Icon className="w-5 h-5 text-amber-400" />
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
                                        transition={{ duration: 0.35, delay: idx * 0.05 + i * 0.06 }}
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
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
                    className="mt-10 text-center rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent p-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        Questions about these terms?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-5 text-sm">
                        Contact us and we&apos;ll be happy to clarify anything.
                    </p>
                    <motion.a
                        href="mailto:jayeshpatil0718@gmail.com"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-amber-500/25 text-sm"
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
