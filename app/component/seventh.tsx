
import Image from "next/image";

export function Seventh() {
  return (
    <section className="bg-[#F4F1EB]">
      <div className="grid min-h-[600px] grid-cols-1 lg:grid-cols-2">

        {/* IMAGE */}
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          <Image
            src="/images/therapy-environment.jfif"
            alt="Peaceful and welcoming therapy environment"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="flex w-full items-center px-6 py-16 sm:px-10 md:px-16 lg:px-16 lg:py-20 xl:px-24">
          <div className="max-w-xl">

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7D72]">
              A SPACE FOR CHANGE
            </p>

            <h2 className="text-4xl font-light leading-[1.2] text-[#3F4A45] sm:text-5xl lg:text-6xl">
              You can honor where you&apos;ve been while creating a different
              way forward.
            </h2>

            <p className="mt-7 text-sm leading-7 text-[#5F6862] sm:text-base">
              Therapy can help you understand the experiences that shaped you,
              reconnect with yourself, and build greater resilience. Dr. Maya
              Reynolds offers a supportive space to explore what is happening
              now while creating meaningful change for the future.
            </p>

            <p className="mt-5 text-sm leading-7 text-[#5F6862] sm:text-base">
              Whether you are navigating anxiety, trauma, burnout, or years of
              putting pressure on yourself, you do not have to work through it
              alone.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}
