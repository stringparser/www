import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import {
  education,
  educationFootnotes,
  experience,
  languages,
  technologies,
} from "@/data/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "CV",
};

export default function CvPage() {
  return (
    <>
      <PageHero title="CV" subtitle="Find out what I've been up to.">
        <a
          href={site.cvPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black/80 transition hover:brightness-95"
        >
          Download PDF version
        </a>
      </PageHero>

      <CvBlock id="cv" title="Languages">
        <ul className="grid gap-2 sm:grid-cols-2">
          {languages.map(({ name, level }) => (
            <li key={name} className="rounded-lg bg-black/[0.03] px-4 py-3">
              <span className="font-medium">{name}</span>: {level}
            </li>
          ))}
        </ul>
      </CvBlock>

      <CvBlock title="Technologies">
        <ul className="grid gap-2">
          {technologies.map((item) => (
            <li key={item} className="rounded-lg bg-black/[0.03] px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </CvBlock>

      <CvBlock title="Experience">
        <ul className="space-y-8">
          {experience.map((entry) => (
            <li
              key={`${entry.period}-${entry.role}`}
              className="border-b border-black/8 pb-8 last:border-b-0 last:pb-0"
            >
              <p className="text-sm text-black/55">
                {entry.period} ({entry.location})
              </p>
              <h4 className="mt-2 text-lg font-semibold">{entry.role}</h4>
              {(entry.client || entry.agency) && (
                <p className="mt-2 text-black/75">
                  {entry.client && entry.agency ? (
                    <>
                      On{" "}
                      <a href={entry.client.href}>{entry.client.label}</a> for{" "}
                      <a href={entry.agency.href}>{entry.agency.label}</a>
                    </>
                  ) : entry.client ? (
                    <>
                      For <a href={entry.client.href}>{entry.client.label}</a>
                    </>
                  ) : null}
                </p>
              )}
              {entry.team ? (
                <p className="mt-2 text-black/75">{entry.team}</p>
              ) : null}
              {entry.stack ? (
                <p className="mt-2 text-black/75">{entry.stack}</p>
              ) : null}
              {entry.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-black/75">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </CvBlock>

      <CvBlock title="Education">
        <ul className="space-y-8">
          {education.map((entry) => (
            <li
              key={`${entry.period}-${entry.degree}`}
              className="border-b border-black/8 pb-8 last:border-b-0 last:pb-0"
            >
              <p className="text-sm text-black/55">
                {entry.period} at {entry.institution}
              </p>
              <h4 className="mt-2 text-lg font-semibold">{entry.degree}</h4>
              <p className="mt-3 whitespace-pre-line text-black/75">
                {entry.details}
              </p>
            </li>
          ))}
          <li className="border-t border-black/8 pt-8">
            <p className="whitespace-pre-line text-sm text-black/60">
              {educationFootnotes.join("\n")}
            </p>
          </li>
        </ul>
      </CvBlock>
    </>
  );
}

function CvBlock({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-t border-black/5 bg-white px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
