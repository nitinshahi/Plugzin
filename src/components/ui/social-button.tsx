import Image from "next/image";

export function SocialButton({
  provider,
  label,
}: {
  provider: "google" | "apple";
  label: string;
}) {
  return (
    <button
      type="button"
      className="border-ash-100 shadow-xs text-ash-100 hover:bg-surface-raised/20 flex h-12 w-full items-center justify-center gap-3 rounded-lg border text-base font-semibold transition-colors"
    >
      <Image
        src={`/brand/social/${provider}.svg`}
        alt=""
        width={24}
        height={24}
        unoptimized
      />
      {label}
    </button>
  );
}
