import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site";

type NavbarProps = {
  variant?: "default" | "overlay";
};

export function Navbar({ variant = "default" }: NavbarProps) {
  const isOverlay = variant === "overlay";

  return (
    <header
      className={
        isOverlay
          ? "fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-6 md:px-10"
          : "sticky top-0 z-50 flex h-16 items-center justify-between border-b border-black/5 bg-white/90 px-6 backdrop-blur-md md:px-10"
      }
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/static/img/logo.png"
          alt="Home"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </Link>

      <nav className="flex items-center gap-6 text-sm font-medium tracking-wide">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={
              isOverlay
                ? "rounded-md bg-black/35 px-3 py-1.5 text-white backdrop-blur-sm transition hover:bg-black/50"
                : "highlight text-black/80 transition hover:text-black"
            }
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
