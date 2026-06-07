import Link from "next/link";
import { site } from "@/lib/site";

type ServiceCardProps = {
  title: string;
  description: string;
  cta: string;
  subject: string;
};

export function ServiceCard({
  title,
  description,
  cta,
  subject,
}: ServiceCardProps) {
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;

  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-black/8 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-black/70">
        {description}
      </p>
      <span className="mt-6 text-sm font-semibold underline underline-offset-4 group-hover:text-black/60">
        {cta}
      </span>
    </Link>
  );
}
