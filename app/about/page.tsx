
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#E8E2D8] text-[#3F4A45]">

      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              ABOUT DR. MAYA REYNOLDS
            </p>

            <h1 className="max-w-2xl text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">
              A thoughtful space to slow down, understand yourself, and heal.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Dr. Maya Reynolds, PsyD, is a Licensed Clinical Psychologist
              based in Santa Monica, California. She provides warm,
              collaborative therapy for adults experiencing anxiety, panic,
              trauma, burnout, and the lasting effects of difficult
              experiences.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Many of Maya&apos;s clients are thoughtful, self-aware, and
              high-achieving people who may look like they are doing well on
              the outside while feeling overwhelmed, exhausted, or stuck in
              overthinking on the inside.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[450px] w-full sm:h-[550px]">
            <Image
              src="/images/docter.png"
              alt="Calm and private therapy office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Approach to Therapy */}
      <section className="bg-[#F4F1EB] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            HER APPROACH
          </p>

          <h2 className="max-w-4xl text-4xl font-light leading-[1.2] sm:text-5xl">
            Therapy should feel supportive, grounded, and collaborative.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 text-sm leading-7 text-[#5F6862] md:grid-cols-2 md:gap-12">

            <p>
              Maya believes therapy works best when clients feel respected,
              understood, and actively involved in the process. Sessions are
              structured enough to feel supportive while still leaving room
              for reflection and deeper exploration.
            </p>

            <p>
              She integrates evidence-based approaches including CBT, EMDR,
              mindfulness-based practices, and body-oriented techniques. Her
              work is tailored to each client&apos;s needs rather than following
              a one-size-fits-all approach.
            </p>

          </div>
        </div>
      </section>

      {/* Who She Works With */}
      <section className="bg-[#E8E2D8] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

          <div>
            <h2 className="text-4xl font-light leading-tight sm:text-5xl">
              Who I work with
            </h2>
          </div>

          <div className="text-sm leading-7 text-[#5F6862] sm:text-base">
            <p>
              Maya works with adults who are navigating anxiety, panic, trauma,
              burnout, perfectionism, and high internal pressure.
            </p>

            <p className="mt-6">
              She also works with professionals, entrepreneurs, and creatives
              who may feel disconnected or exhausted after years of pushing
              through stress. Therapy can provide space to slow down,
              reconnect, and develop more sustainable ways of living and
              working.
            </p>

            <p className="mt-6">
              Trauma work can include both single-incident experiences and
              longer-standing patterns connected to childhood, relationships,
              or chronic stress. This work is carefully paced around safety,
              stabilization, and regulation.
            </p>
          </div>

        </div>
      </section>

      {/* Location */}
      <section className="bg-[#F4F1EB] px-6 py-16 text-center sm:px-10 md:px-16 lg:px-24 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
          SANTA MONICA, CALIFORNIA
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light leading-tight sm:text-4xl">
          In-person therapy in Santa Monica and secure telehealth throughout
          California.
        </h2>
      </section>

    </main>
  );
}
