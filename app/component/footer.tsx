
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#F4F1EB] pt-16 sm:pt-20">

      <div className="grid grid-cols-1 gap-12 px-6 pb-16 sm:px-10 md:grid-cols-2 md:px-16 lg:grid-cols-4 lg:px-24">

        {/* LOGO / ABOUT */}
        <div>
          <h2 className="text-3xl font-light text-[#3F4A45] sm:text-4xl">
            Dr. Maya Reynolds
          </h2>

          <p className="mt-2 text-[10px] tracking-[0.25em] text-[#6B7D72] sm:text-xs">
            CLINICAL PSYCHOLOGIST, PSYD
          </p>

          <p className="mt-6 max-w-[390px] text-sm leading-7 text-[#5F6862]">
            Warm, collaborative therapy for adults navigating anxiety, panic,
            trauma, burnout, and the lasting effects of difficult experiences.
            In-person therapy is available in Santa Monica, with secure
            telehealth for clients throughout California.
          </p>
        </div>

        {/* NAVIGATE */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-[2px] text-[#3F4A45]">
            NAVIGATE
          </h3>

          <div className="space-y-3 text-sm text-[#5F6862]">
            <Link
              href="/"
              className="block transition hover:text-[#6B7D72]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="block transition hover:text-[#6B7D72]"
            >
              About
            </Link>

            <Link
              href="/services"
              className="block transition hover:text-[#6B7D72]"
            >
              Services
            </Link>

            <Link
              href="/approach"
              className="block transition hover:text-[#6B7D72]"
            >
              Approach
            </Link>

            <Link
              href="/faqs"
              className="block transition hover:text-[#6B7D72]"
            >
              FAQs
            </Link>

            <Link
              href="/our-office"
              className="block transition hover:text-[#6B7D72]"
            >
              Our Office
            </Link>
          </div>
        </div>

        {/* SPECIALTIES */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-[2px] text-[#3F4A45]">
            SPECIALTIES
          </h3>

          <div className="space-y-3 text-sm text-[#5F6862]">
            <p>Anxiety & Panic</p>
            <p>Trauma & Healing</p>
            <p>Burnout & Perfectionism</p>
            <p>Professional Stress</p>
            <p>EMDR</p>
            <p>Mindfulness-Based Therapy</p>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-6 text-xs font-semibold tracking-[2px] text-[#3F4A45]">
            CONTACT
          </h3>

          <div className="space-y-2 text-sm leading-6 text-[#5F6862]">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
            <p>In-person & secure telehealth</p>
            <p>Serving clients throughout California</p>
          </div>

          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full border border-[#5C6B63] px-6 py-3 text-xs font-semibold tracking-[0.15em] text-[#3F4A45] transition hover:bg-[#3F4A45] hover:text-white"
          >
            GET STARTED
          </Link>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#3F4A45] px-6 py-4 text-center text-xs leading-6 text-white sm:px-10">
        <span>Terms &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Disclaimer</span>
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="block sm:inline">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD
        </span>
      </div>

    </footer>
  );
}
