"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  mode: "login" | "signup";
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleEmailAuth = async () => {
    setError("");
    setLoading(true);

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}/callback`,
          },
        });
        if (error) throw error;
        router.push(redirect);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push(redirect);
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleOAuth = async (provider: "google" | "github") => {
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/callback?redirect=${encodeURIComponent(redirect)}`,
      },
    });
  };

  return (
    <div className="w-full max-w-[400px] px-6 text-center">
      <div className="flex justify-center mb-6">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center font-display font-black text-white text-xl"
          style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
            boxShadow: "0 2px 10px rgba(99,102,241,0.3)",
          }}
        >
          B
        </div>
      </div>

      <h1 className="heading text-[26px] mb-2">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </h1>
      <p className="text-text-muted text-sm mb-8">
        {mode === "login" ? "Log in to continue learning." : "Start building with AI today."}
      </p>

      {/* OAuth */}
      <div className="flex flex-col gap-2.5 mb-6">
        <button
          onClick={() => handleOAuth("google")}
          className="btn-ghost w-full py-3 text-sm flex items-center justify-center gap-2.5"
        >
          <span className="text-lg">G</span> Continue with Google
        </button>
        <button
          onClick={() => handleOAuth("github")}
          className="btn-ghost w-full py-3 text-sm flex items-center justify-center gap-2.5"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          Continue with GitHub
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-border" />
        <span className="text-xs text-text-faint">or</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Form */}
      <div className="flex flex-col gap-3 mb-5 text-left">
        {mode === "signup" && (
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full name"
            className="input-field px-4 py-3 text-sm"
          />
        )}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="input-field px-4 py-3 text-sm"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="input-field px-4 py-3 text-sm"
          onKeyDown={(e) => e.key === "Enter" && handleEmailAuth()}
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 mb-4 text-left">{error}</p>
      )}

      <Button
        onClick={handleEmailAuth}
        disabled={loading}
        className="w-full py-3.5 text-[15px] mb-4"
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? "Loading..." : mode === "login" ? "Log in" : "Create account"}
      </Button>

      <p className="text-[13px] text-text-muted">
        {mode === "login" ? "Don't have an account? " : "Already have an account? "}
        <Link
          href={mode === "login" ? "/signup" : "/login"}
          className="text-accent font-medium no-underline hover:underline"
        >
          {mode === "login" ? "Sign up" : "Log in"}
        </Link>
      </p>
    </div>
  );
}
