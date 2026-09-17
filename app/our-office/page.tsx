
import Image from "next/image";

export default function OurOffice() {
  return (
    <main className="min-h-screen bg-[#E8E2D8] text-[#3F4A45]">

      {/* Hero */}
      <section className="px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Text */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              OUR OFFICE
            </p>

            <h1 className="max-w-2xl text-4xl font-light leading-[1.15] sm:text-5xl lg:text-6xl">
              A quiet, private space to feel at ease.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-[#5F6862] sm:text-base">
              Dr. Maya Reynolds&apos; office is located in Santa Monica,
              California. The space is calm, comfortable, and intentionally
              uncluttered, with natural light that creates a grounded
              environment for therapy.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#5F6862] sm:text-base">
              The office is designed to provide a sense of privacy and comfort
              so you can slow down, reflect, and focus on your therapy journey.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-[450px] w-full sm:h-[550px]">
            <Image
              src="/images/office2.jpg"
              alt="Calm and private therapy office in Santa Monica"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* Office Details */}
      <section className="bg-[#F4F1EB] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">

          {/* Location */}
          <div className="border-t border-[#CFC8BD] pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              LOCATION
            </p>

            <h2 className="mt-5 text-2xl font-light">
              Santa Monica
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#5F6862]">
              123th Street 45 W
              <br />
              Santa Monica, CA 90401
            </p>
          </div>

          {/* In Person */}
          <div className="border-t border-[#CFC8BD] pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              IN-PERSON
            </p>

            <h2 className="mt-5 text-2xl font-light">
              In-Person Therapy
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#5F6862]">
              Meet with Dr. Maya Reynolds in her quiet and private Santa
              Monica office, designed to feel comfortable and grounding.
            </p>
          </div>

          {/* Telehealth */}
          <div className="border-t border-[#CFC8BD] pt-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              ONLINE
            </p>

            <h2 className="mt-5 text-2xl font-light">
              Secure Telehealth
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#5F6862]">
              Secure telehealth sessions are available for clients located
              throughout California.
            </p>
          </div>

        </div>
      </section>

      {/* Experience */}
      <section className="bg-[#E8E2D8] px-6 py-20 sm:px-10 md:px-16 lg:px-24 lg:py-28">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
            A SPACE FOR YOU
          </p>

          <h2 className="mt-6 text-4xl font-light leading-tight sm:text-5xl">
            Come as you are. There is room to slow down here.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-sm leading-7 text-[#5F6862] sm:text-base">
            The office is a calm and welcoming environment where you can feel
            respected and understood. Natural light, comfortable surroundings,
            and a private setting help create space for reflection and
            meaningful therapeutic work.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#3F4A45] px-6 py-20 text-center sm:px-10 md:px-16 lg:px-24 lg:py-24">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            GET STARTED
          </p>

          <h2 className="mt-5 text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            In-person therapy is available in Santa Monica, with secure
            telehealth for clients throughout California.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-block rounded-full border border-white/60 px-7 py-3 text-xs font-semibold tracking-[0.15em] text-white transition hover:bg-white hover:text-[#3F4A45]"
          >
            CONTACT MAYA
          </a>

        </div>
      </section>

    </main>
  );
}
