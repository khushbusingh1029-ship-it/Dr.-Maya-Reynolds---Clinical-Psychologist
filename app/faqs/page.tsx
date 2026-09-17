
export default function FAQs() {
  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#3F4A45]">

      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">
            A few things you may want to know before getting started.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#5F6862] sm:text-base">
            Starting therapy can bring up questions. Here are some helpful
            details about working with Dr. Maya Reynolds.
          </p>

        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#E8E2D8] px-6 py-16 sm:px-10 md:px-16 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-5xl">

          {/* FAQ 1 */}
          <div className="border-t border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              What can I come to therapy for?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Dr. Maya Reynolds works with adults experiencing anxiety, panic,
              trauma, burnout, perfectionism, and the lasting effects of
              difficult experiences. She also supports professionals,
              entrepreneurs, and creatives who are feeling exhausted or
              disconnected after prolonged stress.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="border-t border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              Do you offer in-person therapy?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Yes. In-person therapy is available from Dr. Maya Reynolds&apos;
              quiet and private office in Santa Monica, California.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="border-t border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              Do you offer online therapy?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Yes. Secure telehealth is available for clients located
              throughout California.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="border-t border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              What therapeutic approaches do you use?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Maya integrates evidence-based approaches including CBT, EMDR,
              mindfulness-based practices, and body-oriented techniques.
              Treatment is tailored to each client&apos;s individual needs.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="border-t border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              What is trauma therapy like?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Trauma work is carefully paced around safety, stabilization, and
              regulation. Maya works with both single-incident trauma and
              complex, long-standing patterns connected to childhood,
              relationships, or chronic stress.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="border-t border-b border-[#CFC8BD] py-8">
            <h2 className="text-xl font-light sm:text-2xl">
              How do I know if therapy with Maya is a good fit?
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Maya believes therapy works best when clients feel respected,
              understood, and actively involved. Her approach combines
              practical tools with deeper therapeutic work and is designed to
              support meaningful, sustainable change.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3F4A45] px-6 py-20 text-center sm:px-10 md:px-16 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            READY TO BEGIN?
          </p>

          <h2 className="mt-5 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            You don&apos;t have to figure everything out on your own.
          </h2>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full border border-white/60 px-7 py-3 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-white hover:text-[#3F4A45]"
          >
            GET STARTED
          </a>

        </div>
      </section>

    </main>
  );
}
