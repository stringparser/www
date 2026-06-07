import type { Metadata } from "next";
import Link from "next/link";
import { ContentSection } from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "Hey, hi there! Come in",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[42vh] items-center justify-center overflow-hidden px-6 py-24 text-center text-white md:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/static/img/rotating-sky.jpg)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            About
          </h1>
          <p className="mt-4 text-lg text-white/85">Hey, hi there! Come in.</p>
        </div>
      </section>

      <ContentSection
        id="focus"
        title="Main focus"
        action={{ href: "/contact", label: "GET IN CONTACT" }}
        image={{
          src: "/static/img/fractal-canopy.png",
          alt: "Fractal canopy illustration",
          framed: true,
        }}
      >
        <p>
          I have years of experience coding front-end web and native apps.
          Currently, I&apos;m focused building backend applications and learning
          more about infrastructure. I studied Physics, so it always has been a
          passion for me to understand complex systems and find solutions that
          work.
        </p>
      </ContentSection>

      <section className="border-t border-black/5 bg-white px-6 py-20 md:px-10">
        <div className="prose mx-auto max-w-3xl text-base leading-7 text-black/75">
          <p>
            Currently, I&apos;m focused building backend applications and
            learning more about infrastructure.
          </p>
          <p>
            I used to build{" "}
            <a href="https://reactnative.dev/">ReactNative</a> applications and
            front-end solutions with <a href="https://reactjs.org/">React.js</a>
            , <a href="https://redux.js.org/">redux</a> or{" "}
            <a href="https://react-query.tanstack.com/">useQuery</a> and
            TypeScript. At the moment I&apos;m learning Rust when I have some
            spare time. Is very nice.
          </p>
          <p>
            My background is in Physics, I&apos;ve studied it in{" "}
            <a href="https://www.ugr.es">Granada</a> (Spain) and in{" "}
            <a href="https://www.lmu.de">Munich</a> (Germany). I like to solve
            problems, the simpler the solution the better. I&apos;m from a{" "}
            <a href="https://goo.gl/maps/pNam2Bxtsyw">
              tiny town in Jaén
            </a>{" "}
            (Spain). I like talking with people. I&apos;ve had 3 bands in
            Granada for which I made some songs and sing. The first contact I
            had with web development was in winter 2012. Started with{" "}
            <a href="https://nodejs.org">nodejs</a> which led to{" "}
            <a href="https://github.com/strongloop/express">express</a>,{" "}
            <a href="https://github.com/jadejs/jade">jade</a> and{" "}
            <a href="https://mongodb.org/">mongodb</a>, moved to{" "}
            <a href="https://github.com/meteor/meteor">meteor</a> after which I
            wanted to really learn something from the ground up so I looked
            around and found <a href="https://facebook.github.io/react">React</a>
            , <a href="https://github.com/faye/faye">faye</a> and{" "}
            <a href="https://github.com/gulpjs/gulp">gulp</a>. I prefer doing
            things and then talking about them instead of the other way around.
            I like kindness and honesty. I believe in patience and hard work.
          </p>
          <p>
            For a more complete experience/skills you can always check{" "}
            <Link href="/cv">my cv</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
