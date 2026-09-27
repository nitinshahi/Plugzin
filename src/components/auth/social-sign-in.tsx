import { SocialButton } from "@/components/ui/social-button";

export function SocialSignIn() {
  return (
    <div className="flex flex-col gap-3">
      <SocialButton provider="google" label="Sign in with Google" />
      <SocialButton provider="apple" label="Sign in with Apple" />
    </div>
  );
}
