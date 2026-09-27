import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PasswordField } from "@/components/auth/password-field";
import { Button } from "@/components/ui/button";
import { SocialButton } from "@/components/ui/social-button";
import { TextField } from "@/components/ui/text-field";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Sign up for Plugzin — it's free.",
};

export default function SignUpPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-5 py-15">
      <Link href="/" aria-label="Plugzin home" className="absolute top-8 left-20">
        <Image
          src="/brand/plugzin-logo.svg"
          alt="Plugzin"
          width={125}
          height={36}
          priority
          unoptimized
        />
      </Link>

      <div className="bg-gradient-brand rounded-panel max-w-auth-card w-full p-px">
        <div className="bg-surface-2 rounded-panel flex flex-col items-center gap-5 px-12 py-8">
          <div className="flex flex-col items-center gap-1.5 text-center">
            <h1 className="font-display text-display-sm leading-display text-white uppercase">
              Create your Account
            </h1>
            <p className="font-helvetica text-ash-300 leading-auto text-xl">
              Sign up it&rsquo;s free
            </p>
          </div>

          <form className="flex w-full flex-col gap-5">
            <div className="flex flex-col gap-4">
              <TextField
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="font-helvetica"
              />
              <PasswordField name="password" placeholder="Enter password" />
              <PasswordField
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <Button
                type="submit"
                className="font-display h-11 w-full text-base font-black uppercase"
              >
                Create Account
              </Button>
            </div>

            <div className="flex w-full items-center gap-4">
              <span className="bg-ash-300 h-px flex-1" />
              <span className="text-ash-300 leading-auto text-xl font-medium italic">or</span>
              <span className="bg-ash-300 h-px flex-1" />
            </div>

            <div className="flex flex-col gap-3">
              <SocialButton provider="google" label="Sign up with Google" />
              <SocialButton provider="apple" label="Sign up with Apple" />
            </div>

            <p className="font-helvetica text-ash-400 tracking-snug leading-auto text-center text-xs">
              By clicking <span className="font-bold">Create account</span>, you
              agree to Plugzin&rsquo;s{" "}
              <Link href="/policy" className="underline">
                privacy notice
              </Link>
              ,{" "}
              <Link href="/terms" className="underline">
                T&amp;Cs
              </Link>{" "}
              and to receive offers, news and updates.
            </p>

            <p className="font-helvetica text-ash-300 tracking-snug leading-auto text-center text-sm">
              Already have an account?{" "}
              <Link href="/sign-in" className="text-brand font-bold">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
