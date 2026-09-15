import Image from "next/image";
import Link from "next/link";

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const src =
    tone === "light"
      ? "/images/logo/niubot-logo-transparent.png"
      : "/images/logo/niubot-logo-transparent-white.png";

  return (
    <Link href="/" className="flex items-center gap-2" aria-label="niubot — inicio">
      <Image
        src={src}
        alt="niubot"
        width={140}
        height={148}
        className="h-10 w-auto sm:h-11"
        priority
      />
    </Link>
  );
}
