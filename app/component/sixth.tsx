
import Image from "next/image";

export function Sixth() {
  return (
    <section id="approach" className="bg-[#E8E2D8]">
      <div className="grid min-h-[650px] grid-cols-1 bg-[#E8E2D8] lg:grid-cols-[2fr_0.5fr]">

        {/* CONTENT */}
        <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-16 lg:py-20 xl:px-24">

          {/* SMALL HEADING */}
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            HOW WE WORK
          </p>

          {/* MAIN HEADING */}
          <div className="pt-10 sm:pt-14 lg:pt-16">
            <h2 className="max-w-3xl text-4xl font-light leading-[1.15] text-[#3F4A45] sm:text-5xl lg:text-6xl">
              A warm, collaborative approach to healing.
            </h2>
          </div>

          {/* TEXT */}
          <div className="mt-8 grid grid-cols-1 gap-8 text-sm leading-7 text-[#5F6862] md:grid-cols-2 md:gap-10">

            <p>
              <span className="font-semibold text-[#3F4A45]">
                Therapy should feel supportive, grounded, and collaborative.
              </span>{" "}
              Dr. Maya Reynolds creates a space where you can slow down, feel
              understood, and take an active role in your healing. Sessions are
              structured enough to provide support while leaving room for
              reflection and deeper exploration.
            </p>

            <p>
              Maya integrates evidence-based approaches including CBT, EMDR,
              mindfulness-based practices, and body-oriented techniques. Trauma
              work is carefully paced with a focus on safety, stabilization,
              and learning ways to regulate stress in everyday life.
            </p>

          </div>

          {/* SECOND ROW */}
          <div className="mt-8 grid grid-cols-1 gap-8 text-sm leading-7 text-[#5F6862] md:grid-cols-2 md:gap-10">

            <p>
              Therapy can also be a place to explore burnout, perfectionism,
              and the pressure to always keep moving. Maya works with
              professionals, entrepreneurs, and creatives who may look
              successful on the outside while feeling exhausted or disconnected
              inside.
            </p>

            <p>
              The goal is not only symptom relief, but greater insight,
              resilience, and a stronger relationship with yourself over time.
              Together, you can develop practical tools while creating a more
              sustainable way of living and working.
            </p>

          </div>

          {/* LINK */}
          <a
            href="/approach"
            className="group mt-10 w-fit text-sm font-semibold uppercase tracking-[0.12em] text-[#3F4A45]"
          >
            <span className="relative">
              Learn more about the approach
              <span className="absolute bottom-[-5px] left-0 h-px w-full bg-[#6B7D72] transition-all duration-300 group-hover:w-0"></span>
            </span>
          </a>

        </div>

        {/* IMAGE */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-auto">
          <Image
            src="/images/private-therapy-space.jpg"
            alt="Calm and private therapy space"
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
