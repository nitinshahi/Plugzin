import type { Metadata } from "next";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthDivider } from "@/components/auth/auth-divider";
import { PasswordField } from "@/components/auth/password-field";
import { SocialSignIn } from "@/components/auth/social-sign-in";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Plugzin account.",
};

export default function LoginPage() {
  return (
    <AuthCard title="Welcome back">
      <form className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-4">
          <TextField
            name="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="font-helvetica"
          />
          <PasswordField
            name="password"
            placeholder="Enter password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            className="font-display h-11 w-full text-base font-black uppercase"
          >
            Log in
          </Button>
        </div>

        <AuthDivider />
        <SocialSignIn />

        <p className="font-helvetica text-ash-300 tracking-snug leading-auto text-center text-sm">
          Don&rsquo;t have an account?{" "}
          <Link href="/signup" className="text-brand font-bold">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}
