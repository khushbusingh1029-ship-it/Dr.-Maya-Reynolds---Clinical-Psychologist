
export function Fifth() {
  return (
    <section
      id="specialties"
      className="bg-[#E8E2D8] px-6 py-16 sm:px-10 sm:py-20 md:px-16 lg:px-24 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">

        {/* Heading */}
        <div>
          <h2 className="text-4xl font-light leading-tight text-[#3F4A45] sm:text-5xl">
            Areas of{" "}
            <span className="font-[cursive] text-[#6B7D72]">
              support
            </span>
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[#5F6862]">
            Dr. Maya Reynolds supports adults who are navigating anxiety,
            trauma, burnout, and the lasting effects of difficult experiences.
          </p>
        </div>

        {/* First List */}
        <ul className="space-y-0 text-sm uppercase tracking-wide text-[#5F6862]">
          <li className="border-b border-[#D3CCC1] py-4">
            Anxiety & Panic
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Trauma & Healing
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Burnout
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Perfectionism
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Professional Stress
          </li>
        </ul>

        {/* Second List */}
        <ul className="space-y-0 text-sm uppercase tracking-wide text-[#5F6862]">
          <li className="border-b border-[#D3CCC1] py-4">
            EMDR
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            CBT
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Mindfulness
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Body-Oriented Therapy
          </li>

          <li className="border-b border-[#D3CCC1] py-4">
            Stress & Regulation
          </li>
        </ul>

      </div>
    </section>
  );
}
