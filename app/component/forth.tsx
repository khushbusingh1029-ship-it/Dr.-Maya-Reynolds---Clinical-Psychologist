
import Image from "next/image";

export function Forth() {
  return (
    <section
      id="approach"
      className="relative h-[480px] w-full sm:h-[520px] lg:h-[550px]"
    >
      <Image
        src="/images/therapy-space.jfif"
        alt="Calm and welcoming therapy space"
        fill
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3F4A45]/45"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-10 md:px-16">
        <div className="max-w-4xl text-center">

          <p className="mb-5 text-xs uppercase tracking-[0.2em] text-white/80">
            A Warm & Collaborative Approach
          </p>

          <h2 className="text-3xl font-light leading-relaxed text-white sm:text-4xl lg:text-5xl">
            Therapy can be a place to slow down,
            reconnect with yourself, and create a
            more sustainable way forward.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Dr. Maya Reynolds combines practical tools with deeper therapeutic
            work, creating sessions that feel supportive while leaving room for
            reflection and meaningful change.
          </p>

        </div>
      </div>
    </section>
  );
}