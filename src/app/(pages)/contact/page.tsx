import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact" subtitle="Let's team up." />

      <section
        id="services"
        className="border-t border-black/5 bg-white px-6 py-20 md:px-10"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight">
            Services
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f3f4f6] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Say hello</h2>
            <p className="prose mt-6 max-w-none text-base leading-7 text-black/75">
              You can always send me an{" "}
              <a href={`mailto:${site.email}`}>email to {site.email}</a> or find
              me on{" "}
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                github
              </a>
              .
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/static/img/chip.svg"
              alt="Chip illustration"
              width={200}
              height={200}
              className="h-auto max-w-[200px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
