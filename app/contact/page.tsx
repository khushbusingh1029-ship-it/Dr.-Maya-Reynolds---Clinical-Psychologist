
export default function Contact() {
  return (
    <main className="min-h-screen bg-[#E8E2D8] text-[#3F4A45]">

      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            CONTACT
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">
            Let&apos;s take the first step together.
          </h1>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-[#5F6862] sm:text-base">
            If you are looking for support with anxiety, panic, trauma,
            burnout, or the effects of past experiences, reach out to learn
            more about working with Dr. Maya Reynolds.
          </p>

        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-[#F4F1EB] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              GET IN TOUCH
            </p>

            <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
              A supportive conversation can be a beginning.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Dr. Maya Reynolds offers in-person therapy from her Santa Monica
              office and secure telehealth for clients located throughout
              California.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-8">

            <div className="border-t border-[#CFC8BD] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
                OFFICE
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5F6862] sm:text-base">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div className="border-t border-[#CFC8BD] pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
                AVAILABILITY
              </p>

              <p className="mt-4 text-sm leading-7 text-[#5F6862] sm:text-base">
                In-person therapy in Santa Monica
                <br />
                Secure telehealth throughout California
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[#E8E2D8] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            SEND A MESSAGE
          </p>

          <h2 className="mt-5 text-3xl font-light sm:text-4xl">
            Tell me a little about what brings you here.
          </h2>

          <form className="mt-10 space-y-6">

            <div>
              <label className="mb-2 block text-sm text-[#4E5852]">
                Name
              </label>

              <input
                type="text"
                className="w-full border border-[#CFC8BD] bg-[#F4F1EB] px-4 py-3 outline-none transition focus:border-[#6B7D72]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#4E5852]">
                Email
              </label>

              <input
                type="email"
                className="w-full border border-[#CFC8BD] bg-[#F4F1EB] px-4 py-3 outline-none transition focus:border-[#6B7D72]"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-[#4E5852]">
                Message
              </label>

              <textarea
                rows={6}
                className="w-full resize-none border border-[#CFC8BD] bg-[#F4F1EB] px-4 py-3 outline-none transition focus:border-[#6B7D72]"
                placeholder="Tell me a little about what you are looking for..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="rounded-full border border-[#5C6B63] px-7 py-3 text-xs font-semibold tracking-[0.15em] text-[#3F4A45] transition hover:bg-[#3F4A45] hover:text-white"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#3F4A45] px-6 py-20 text-center sm:px-10 md:px-16 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            You don&apos;t have to navigate it alone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Therapy can be a space to slow down, reconnect, and create
            meaningful change.
          </p>

        </div>
      </section>

    </main>
  );
}