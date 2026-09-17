
export function Eighth() {
  return (
    <section
      id="services"
      className="bg-[#F4F1EB] px-6 py-20 sm:px-10 sm:py-24 md:px-16 lg:px-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">

        {/* LEFT HEADING */}
        <div>
          <h2 className="text-4xl font-light leading-tight text-[#3F4A45] sm:text-5xl">
            Areas of{" "}
            <span className="font-[cursive] text-[#6B7D72]">
              support
            </span>{" "}
            include...
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#5F6862]">
            Dr. Maya Reynolds supports adults navigating anxiety, trauma,
            burnout, and the effects of difficult past experiences.
          </p>
        </div>

        {/* ANXIETY & PANIC */}
        <div>
          <h3 className="mb-5 text-xl font-light text-[#3F4A45]">
            Anxiety & Panic
          </h3>

          <p className="text-sm leading-7 text-[#5F6862]">
            Constant worry, overthinking, body tension, sleep difficulties,
            and panic can make it hard to feel at ease. Therapy can help you
            understand these patterns and develop practical tools for greater
            calm and stability.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block border-b border-[#6B7D72] pb-1 text-[10px] font-semibold tracking-[2px] text-[#3F4A45] transition hover:text-[#6B7D72]"
          >
            LEARN MORE
          </a>
        </div>

        {/* TRAUMA */}
        <div>
          <h3 className="mb-5 text-xl font-light text-[#3F4A45]">
            Trauma & Healing
          </h3>

          <p className="text-sm leading-7 text-[#5F6862]">
            Trauma therapy is carefully paced around safety, stabilization,
            and regulation. Maya works with both single-incident trauma and
            longer-standing patterns connected to childhood, relationships,
            and chronic stress.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block border-b border-[#6B7D72] pb-1 text-[10px] font-semibold tracking-[2px] text-[#3F4A45] transition hover:text-[#6B7D72]"
          >
            LEARN MORE
          </a>
        </div>

        {/* BURNOUT */}
        <div className="lg:col-start-2">
          <h3 className="mb-5 text-xl font-light text-[#3F4A45]">
            Burnout & Perfectionism
          </h3>

          <p className="text-sm leading-7 text-[#5F6862]">
            For professionals, entrepreneurs, and creatives who feel exhausted
            after years of pushing through stress, therapy can create space to
            slow down, reconnect with yourself, and build a more sustainable
            way of living and working.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block border-b border-[#6B7D72] pb-1 text-[10px] font-semibold tracking-[2px] text-[#3F4A45] transition hover:text-[#6B7D72]"
          >
            LEARN MORE
          </a>
        </div>

        {/* METHODS */}
        <div>
          <h3 className="mb-5 text-xl font-light text-[#3F4A45]">
            Evidence-Based Therapy
          </h3>

          <p className="text-sm leading-7 text-[#5F6862]">
            Maya integrates CBT, EMDR, mindfulness-based practices, and
            body-oriented techniques. Your treatment is tailored to your needs
            rather than following a one-size-fits-all approach.
          </p>

          <a
            href="/services"
            className="mt-8 inline-block border-b border-[#6B7D72] pb-1 text-[10px] font-semibold tracking-[2px] text-[#3F4A45] transition hover:text-[#6B7D72]"
          >
            LEARN MORE
          </a>
        </div>

      </div>
    </section>
  );
}
