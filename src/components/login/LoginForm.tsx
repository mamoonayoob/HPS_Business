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
      <div className="login-blur login-blur--navy" aria-hidden />
      <div className="login-blur login-blur--cyan" aria-hidden />

      <div className="login-card">
        <div className="login-header">
          <Image
            src="/images/logo.png"
            alt="HPS"
            width={114}
            height={71}
            className="login-logo"
            priority
          />
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">
            Please login to your account to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
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

          <div className="login-meta-row">
            <label className="login-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="login-remember-checkbox"
              />
              Remember me
            </label>
            <Link href="/contact" className="login-forgot-link">
              Forgot Password?
            </Link>
          </div>

          {error && (
            <p className="login-error">{error}</p>
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

        <p className="login-footer-text">
          Don&apos;t have an account?{" "}
          <Link href="/contact" className="login-footer-link">
            Contact Support
          </Link>
        </p>
      </div>
    </Container>
  );
}
