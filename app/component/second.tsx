
import Image from "next/image";

export function Second() {
  return (
    <section id="about" className="bg-[#E8E2D8]">
      <div className="mx-auto grid min-h-[650px] grid-cols-1 bg-[#E8E2D8] lg:grid-cols-[2fr_1fr]">

        {/* Content */}
        <div className="flex w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-16 lg:px-16 lg:py-20 xl:px-24">

          <h2 className="max-w-4xl text-4xl font-light leading-[1.15] text-[#3F4A45] sm:text-5xl lg:text-5xl">
            You don&apos;t have to keep carrying
            <br className="hidden sm:block" />
            everything on your own.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 text-sm leading-7 text-[#5F6862] md:grid-cols-2 md:gap-10">

            <p>
              <span className="font-semibold text-[#3F4A45]">
                Therapy can be a place to slow down, feel understood, and
                reconnect with yourself.
              </span>{" "}
              Dr. Maya Reynolds provides warm, collaborative therapy for adults
              experiencing anxiety, panic, trauma, and burnout.
            </p>

            <p>
              Many of her clients are thoughtful, high-achieving people who
              appear to be doing well on the outside while feeling overwhelmed,
              exhausted, or stuck in overthinking. Together, therapy creates
              space to understand what you are experiencing and find a more
              sustainable way forward.
            </p>

          </div>
        </div>

        {/* Image */}
        <div className="relative h-[450px] sm:h-[550px] lg:h-auto">
          <Image
            src="/images/office.jfif"
            alt="Calm and private therapy office in Santa Monica"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
