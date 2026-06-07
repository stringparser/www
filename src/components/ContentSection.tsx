import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

type ContentSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  image?: { src: string; alt: string; framed?: boolean };
  action?: { href: string; label: string };
  tone?: "light" | "muted";
};

export function ContentSection({
  id,
  title,
  children,
  image,
  action,
  tone = "light",
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={
        tone === "muted"
          ? "border-t border-black/5 bg-[#f3f4f6] px-6 py-20 md:px-10"
          : "border-t border-black/5 bg-white px-6 py-20 md:px-10"
      }
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <div className="prose mt-6 max-w-none text-base leading-7 text-black/75">
            {children}
          </div>
          {action ? (
            <Link
              href={action.href}
              className="mt-8 inline-flex rounded-xl bg-accent px-6 py-4 text-sm font-semibold text-black/80 transition hover:brightness-95"
            >
              {action.label}
            </Link>
          ) : null}
        </div>

        {image ? (
          <div className="flex justify-center">
            {image.framed ? (
              <div className="rounded-full bg-black/85 p-8">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  height={200}
                  className="h-auto max-w-[200px]"
                />
              </div>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="h-auto max-w-[200px]"
              />
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function SayHelloSection() {
  return (
    <ContentSection
      title="Say hello"
      tone="muted"
      image={{ src: "/static/img/chip.png", alt: "Chip illustration" }}
    >
      <p>
        You can always send me an{" "}
        <a href={`mailto:${site.email}`}>email to {site.email}</a> or find me in{" "}
        <a href={site.github} target="_blank" rel="noopener noreferrer">
          github
        </a>
        .
      </p>
    </ContentSection>
  );
}
