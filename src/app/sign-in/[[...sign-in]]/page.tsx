"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-[#0a0a1a] to-gray-900">
            {/* Background glow effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
                <SignIn afterSignInUrl="/editor" afterSignUpUrl="/editor" />
            </div>
        </div>
    );
}
