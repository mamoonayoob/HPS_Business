"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TextField } from "@/components/ui/TextField";
import { loginUser } from "@/lib/api/auth";
import { ApiError } from "@/lib/api/client";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser({ email, password, rememberMe });
      if (rememberMe) {
        localStorage.setItem("hps_token", response.token);
      } else {
        sessionStorage.setItem("hps_token", response.token);
      }
      window.location.href = "/shipment/create";
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : "Login failed. Please check your credentials.";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container className="login-page-wrap">
      <div className="pointer-events-none absolute -left-32 -top-32 size-[600px] rounded-full bg-primary-navy/30 blur-[50px]" />
      <div className="pointer-events-none absolute -right-32 top-1/4 size-[500px] rounded-full bg-secondary-cyan/30 blur-[50px]" />

      <div className="login-card">
        <div className="mb-8 flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="HPS"
            width={114}
            height={71}
            className="mb-4 h-auto w-[100px]"
          />
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Please login to your account to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <TextField
            id="login-email"
            label="Email Address"
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Mail className="size-5" />}
            required
          />

          <TextField
            id="login-password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock className="size-5" />}
            trailing={
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-text hover:text-dark-text"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            }
            required
          />

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-muted-text">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="size-4 rounded border-gray-300"
              />
              Remember me
            </label>
            <Link
              href="/contact"
              className="text-sm font-bold text-secondary-cyan hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-action-red">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="login-submit-btn"
          >
            {loading ? "Logging in..." : "Login to Account"}
            <ArrowRight className="size-4" />
          </button>
        </form>

        <p className="mt-6 border-t border-gray-100 pt-6 text-center text-sm text-muted-text">
          Don&apos;t have an account?{" "}
          <Link
            href="/contact"
            className="font-black text-primary-navy hover:text-secondary-cyan"
          >
            Contact Support
          </Link>
        </p>
      </div>
    </Container>
  );
}
