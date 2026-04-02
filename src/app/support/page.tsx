"use client";

import NavigationHeader from "@/components/NavigationHeader";
import { Mail, MessageCircle, BookOpen, Github, Zap, HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
    {
        q: "How do I run code in CodeCraft?",
        a: "Select your language from the language selector at the top, write your code in the editor, then click the Run button. Results appear in the output panel below.",
    },
    {
        q: "Which programming languages are supported?",
        a: "CodeCraft supports JavaScript, TypeScript, Python, Java, Go, Rust, C++, C#, and Ruby — with more languages planned.",
    },
    {
        q: "How do I save and share a code snippet?",
        a: "Sign in to your account, write your code, and click the Share button. You'll get a unique link you can send to anyone.",
    },
    {
        q: "What is CodeCraft Pro?",
        a: "CodeCraft Pro is a one-time lifetime upgrade that unlocks all premium languages, themes, and collaboration features. Visit the Pricing page to learn more.",
    },
    {
        q: "Is my code private?",
        a: "Saved snippets are accessible via their link. If you want private snippets, upgrade to Pro which includes private snippet support.",
    },
    {
        q: "How do I report a bug?",
        a: "Open an issue on our GitHub repository with a description of the problem, the language you were using, and steps to reproduce it.",
    },
];

const QUICK_LINKS = [
    {
        icon: BookOpen,
        title: "Documentation",
        desc: "Learn how to use all features",
        color: "from-blue-500/10 to-cyan-500/10",
        ring: "ring-blue-500/20",
        iconColor: "text-blue-400",
        hoverBorder: "hover:border-blue-500/40",
    },
    {
        icon: Github,
        title: "GitHub Issues",
        desc: "Report bugs or request features",
        href: "https://github.com/jayesh77t",
        color: "from-purple-500/10 to-pink-500/10",
        ring: "ring-purple-500/20",
        iconColor: "text-purple-400",
        hoverBorder: "hover:border-purple-500/40",
    },
    {
        icon: Mail,
        title: "Email Support",
        desc: "jayeshpatil0718@gmail.com",
        href: "mailto:jayeshpatil0718@gmail.com",
        color: "from-amber-500/10 to-orange-500/10",
        ring: "ring-amber-500/20",
        iconColor: "text-amber-400",
        hoverBorder: "hover:border-amber-500/40",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
};

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            custom={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
        >
            <motion.div
                className={`rounded-2xl border border-gray-200 dark:border-white/8 bg-white/60 dark:bg-white/[0.03] overflow-hidden cursor-pointer group transition-colors duration-300 ${open ? "border-blue-500/30 dark:border-blue-500/30" : "hover:border-blue-500/20 dark:hover:border-blue-500/20"}`}
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.005 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="flex items-center gap-3 p-6">
                    <motion.div
                        animate={{ rotate: open ? 0 : 0 }}
                        className="p-1.5 rounded-lg bg-blue-500/10 shrink-0"
                    >
                        <Zap className="w-4 h-4 text-blue-400" />
                    </motion.div>
                    <h3 className="text-gray-900 dark:text-white font-semibold flex-1">{q}</h3>
                    <motion.div
                        animate={{ rotate: open ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="shrink-0"
                    >
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </motion.div>
                </div>

                <AnimatePresence initial={false}>
                    {open && (
                        <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                            <div className="px-6 pb-6 pt-0">
                                <div className="h-px bg-gray-200 dark:bg-white/8 mb-4" />
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed pl-8">
                                    {a}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

export default function SupportPage() {
    return (
        <div className="relative min-h-screen bg-gray-100 dark:bg-[#0a0a0f] selection:bg-blue-500/20 selection:text-blue-200">
            <NavigationHeader />

            {/* Ambient glow */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/6 rounded-full blur-[120px]"
                    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[100px]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <main className="relative pt-24 pb-20 px-4 max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <HelpCircle className="w-3.5 h-3.5" />
                        Support Center
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                    >
                        How can we{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                            help you?
                        </span>
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                    >
                        Find answers in our FAQ, browse documentation, or reach out to us directly.
                    </motion.p>
                </motion.div>

                {/* Quick links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
                    {QUICK_LINKS.map(({ icon: Icon, title, desc, href, color, ring, iconColor, hoverBorder }, i) => {
                        const inner = (
                            <motion.div
                                custom={i}
                                variants={fadeUp}
                                initial="hidden"
                                animate="visible"
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                                className={`group relative rounded-2xl border border-gray-200 dark:border-white/8 ${hoverBorder} bg-gradient-to-br ${color} transition-all duration-300 p-6 cursor-pointer`}
                            >
                                <motion.div
                                    className={`inline-flex p-3 rounded-xl bg-white/50 dark:bg-white/5 ring-1 ${ring} mb-4`}
                                    whileHover={{ rotate: [0, -10, 10, 0] }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Icon className={`w-5 h-5 ${iconColor}`} />
                                </motion.div>
                                <h3 className="text-gray-900 dark:text-white font-semibold mb-1">{title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{desc}</p>
                            </motion.div>
                        );
                        return href ? (
                            <a key={title} href={href} target="_blank" rel="noopener noreferrer">
                                {inner}
                            </a>
                        ) : (
                            <div key={title}>{inner}</div>
                        );
                    })}
                </div>

                {/* FAQ */}
                <div>
                    <motion.div
                        className="flex items-center gap-3 mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="p-2 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20">
                            <MessageCircle className="w-5 h-5 text-blue-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Frequently Asked Questions
                        </h2>
                    </motion.div>

                    <div className="space-y-4">
                        {FAQS.map(({ q, a }, index) => (
                            <FAQItem key={q} q={q} a={a} index={index} />
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        Still need help?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Our team responds to emails usually within 24 hours.
                    </p>
                    <motion.a
                        href="mailto:jayeshpatil0718@gmail.com"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25"
                        whileHover={{ y: -2, scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    >
                        <Mail className="w-4 h-4" />
                        Contact Support
                    </motion.a>
                </motion.div>
            </main>
        </div>
    );
}
