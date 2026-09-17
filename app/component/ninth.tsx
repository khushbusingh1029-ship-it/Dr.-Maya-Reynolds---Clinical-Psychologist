
import Image from "next/image";
import Link from "next/link";

export default function Ninth() {
  return (
    <section id="contact" className="bg-[#E8E2D8]">
      <div className="grid min-h-[650px] grid-cols-1 bg-[#E8E2D8] lg:grid-cols-[0.25fr_1.5fr_1fr]">

        {/* LEFT IMAGE */}
        <div className="relative h-[280px] sm:h-[380px] lg:h-auto">
          <Image
            src="/images/therapy2.jpg"
            alt="Calm and private therapy environment"
            fill
            sizes="(max-width: 1024px) 100vw, 20vw"
            className="object-cover"
          />
        </div>

        {/* CENTER CONTENT */}
        <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-16 lg:py-20 xl:px-24">

          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7D72]">
            SCHEDULE AN APPOINTMENT
          </p>

          <h2 className="max-w-xl text-4xl font-light leading-[1.15] text-[#3F4A45] sm:text-5xl lg:text-6xl">
            Find the support you need to feel more like yourself again.
          </h2>

          <p className="mt-8 max-w-lg text-sm leading-7 text-[#5F6862] sm:text-base">
            Starting therapy is a meaningful step. Dr. Maya Reynolds offers
            warm, collaborative therapy for adults navigating anxiety, panic,
            trauma, burnout, and the lasting effects of difficult experiences.
          </p>

          <p className="mt-5 max-w-lg text-sm leading-7 text-[#5F6862] sm:text-base">
            Sessions are available in person from her quiet, private office in
            Santa Monica, as well as through secure telehealth for clients
            located throughout California.
          </p>

          <Link
            href="/contact"
            className="mt-8 w-fit rounded-full border border-[#5C6B63] px-7 py-3 text-xs font-semibold tracking-[0.15em] text-[#3F4A45] transition duration-300 hover:bg-[#3F4A45] hover:text-white"
          >
            GET STARTED
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-[300px] sm:h-[400px] lg:h-auto">
          <Image
            src="/images/therapy-enviroment-3.jpg"
            alt="Welcoming therapy space"
            fill
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
