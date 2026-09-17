
export default function Services() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#3F4A45]">

      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            SERVICES
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">
            Support for the places in life that feel overwhelming.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#5F6862] sm:text-base">
            Dr. Maya Reynolds provides warm, collaborative therapy for adults
            navigating anxiety, panic, trauma, burnout, and the lasting effects
            of difficult experiences.
          </p>

        </div>
      </section>

      {/* Services */}
      <section className="bg-[#E8E2D8] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Anxiety */}
          <div className="border-t border-[#CFC8BD] pt-7">
            <span className="text-xs tracking-[0.2em] text-[#6B7D72]">
              01
            </span>

            <h2 className="mt-5 text-2xl font-light sm:text-3xl">
              Anxiety & Panic
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#5F6862]">
              Therapy can help when constant worry, overthinking, body tension,
              sleep difficulties, or panic begin to affect everyday life.
              Together, we can understand these patterns and develop practical
              tools for greater calm and stability.
            </p>
          </div>

          {/* Trauma */}
          <div className="border-t border-[#CFC8BD] pt-7">
            <span className="text-xs tracking-[0.2em] text-[#6B7D72]">
              02
            </span>

            <h2 className="mt-5 text-2xl font-light sm:text-3xl">
              Trauma & Healing
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#5F6862]">
              Trauma work is carefully paced around safety, stabilization, and
              regulation. Maya works with both single-incident trauma and
              longer-standing patterns connected to childhood, relationships,
              or chronic stress.
            </p>
          </div>

          {/* Burnout */}
          <div className="border-t border-[#CFC8BD] pt-7">
            <span className="text-xs tracking-[0.2em] text-[#6B7D72]">
              03
            </span>

            <h2 className="mt-5 text-2xl font-light sm:text-3xl">
              Burnout & Perfectionism
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#5F6862]">
              For professionals, entrepreneurs, and creatives who feel
              exhausted after years of pushing through stress, therapy can
              create space to slow down, reconnect with yourself, and build a
              more sustainable way of living and working.
            </p>
          </div>

        </div>
      </section>

      {/* Therapy Methods */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              THERAPEUTIC METHODS
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
              Evidence-based support tailored to you.
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-7 text-[#5F6862] sm:text-base">
            <p>
              Dr. Maya Reynolds integrates several evidence-based approaches,
              including Cognitive Behavioral Therapy (CBT), EMDR,
              mindfulness-based practices, and body-oriented techniques.
            </p>

            <p>
              Your therapy is shaped around your needs and experiences rather
              than following a one-size-fits-all approach.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="border border-[#CFC8BD] p-5">
                <h3 className="font-medium text-[#3F4A45]">CBT</h3>
                <p className="mt-2 text-sm">
                  Practical tools for understanding thoughts, emotions, and
                  patterns.
                </p>
              </div>

              <div className="border border-[#CFC8BD] p-5">
                <h3 className="font-medium text-[#3F4A45]">EMDR</h3>
                <p className="mt-2 text-sm">
                  An evidence-based approach used in trauma-focused work.
                </p>
              </div>

              <div className="border border-[#CFC8BD] p-5">
                <h3 className="font-medium text-[#3F4A45]">
                  Mindfulness
                </h3>
                <p className="mt-2 text-sm">
                  Practices that support awareness, grounding, and regulation.
                </p>
              </div>

              <div className="border border-[#CFC8BD] p-5">
                <h3 className="font-medium text-[#3F4A45]">
                  Body-Oriented
                </h3>
                <p className="mt-2 text-sm">
                  Approaches that help connect emotional experiences with the
                  body.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Availability */}
      <section className="bg-[#3F4A45] px-6 py-16 text-center sm:px-10 md:px-16 lg:px-24 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          THERAPY IN CALIFORNIA
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-light leading-tight text-white sm:text-4xl">
          In-person therapy in Santa Monica and secure telehealth throughout
          California.
        </h2>
      </section>

    </main>
  );
}
