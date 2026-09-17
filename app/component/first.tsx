
import Image from "next/image";
import Link from "next/link";

export default function First() {
  return (
    <section id="home" className="bg-[#E8E2D8]">
      <div className="mx-auto grid min-h-[650px] grid-cols-1 bg-[#E8E2D8] lg:grid-cols-[1fr_1.5fr_0.25fr]">

        {/* Left Image */}
        <div className="relative h-[380px] sm:h-[480px] lg:h-auto">
          <Image
            src="/images/therapy-space1.jfif"
            alt="Calm therapy space in Santa Monica"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 md:px-16 lg:px-16 lg:py-20 xl:px-24">

          {/* Location */}
          <p className="mb-7 text-[10px] uppercase tracking-[0.18em] text-[#6B7D72] sm:text-xs">
            IN-PERSON THERAPY IN
            <br />
            SANTA MONICA & TELEHEALTH ACROSS CALIFORNIA
          </p>

          {/* Main Heading */}
          <h1 className="max-w-xl text-4xl font-light leading-[1.15] text-[#3F4A45] sm:text-5xl lg:text-5xl xl:text-6xl">
            Find your way back
            <br className="hidden sm:block" />
            to yourself and
            <br className="hidden sm:block" />
            begin to <span className="italic">thrive.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-lg text-sm leading-7 text-[#5F6862] sm:mt-8 sm:text-base">
            Warm, collaborative therapy for adults navigating anxiety, panic,
            trauma, burnout, and the lasting effects of difficult experiences.
          </p>

          {/* CTA */}
          <Link
            href="#contact"
            className="mt-8 w-fit border-b border-[#6B7D72] pb-1 text-xs tracking-[0.15em] text-[#3F4A45] transition duration-300 hover:text-[#6B7D72]"
          >
            BEGIN YOUR JOURNEY
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative h-[280px] sm:h-[360px] lg:h-auto">
          <Image
            src="/images/therapy-space2.jfif"
            alt="Therapy and mental wellness"
            fill
            sizes="(max-width: 1024px) 100vw, 20vw"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}

