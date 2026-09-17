
import Image from "next/image";

export default function Third() {
  return (
    <section className="bg-[#F4F1EB] py-16 sm:py-20 lg:py-24">
      
      {/* Heading */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24">
        <h2 className="text-4xl font-light leading-tight text-[#3F4A45] sm:text-5xl">
          Areas of{" "}
          <span className="font-[cursive] text-[#6B7D72]">
            support
          </span>
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5F6862] sm:text-base">
          Therapy for adults navigating anxiety, trauma, burnout, and the
          pressure to keep everything together.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-10 px-6 sm:px-10 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-24">

        {/* Anxiety & Panic */}
        <div className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px]">
            <Image
              src="/images/anxiety.jpg"
              alt="Calm space representing anxiety and emotional support"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="pt-5">
            <h3 className="mb-3 text-2xl font-light text-[#3F4A45]">
              Anxiety & Panic
            </h3>

            <p className="leading-7 text-[#5F6862]">
              When constant worry, overthinking, body tension, or panic starts
              affecting daily life, therapy can help you understand what is
              happening and develop practical tools for greater calm and
              stability.
            </p>
          </div>
        </div>

        {/* Trauma */}
        <div className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px]">
            <Image
              src="/images/trauma.jpg"
              alt="Peaceful therapy space representing trauma healing"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="pt-5">
            <h3 className="mb-3 text-2xl font-light text-[#3F4A45]">
              Trauma & Healing
            </h3>

            <p className="leading-7 text-[#5F6862]">
              Trauma therapy is carefully paced around safety, stabilization,
              and regulation. We can work with both single-incident trauma and
              longer-standing patterns connected to childhood, relationships,
              or chronic stress.
            </p>
          </div>
        </div>

        {/* Burnout */}
        <div className="w-full">
          <div className="relative h-[250px] w-full overflow-hidden sm:h-[280px]">
            <Image
              src="/images/burnout.jpg"
              alt="Peaceful workspace representing professional burnout"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="pt-5">
            <h3 className="mb-3 text-2xl font-light text-[#3F4A45]">
              Burnout & Perfectionism
            </h3>

            <p className="leading-7 text-[#5F6862]">
              For professionals, entrepreneurs, and creatives who have spent
              years pushing through stress, therapy can create space to slow
              down, reconnect with yourself, and build a more sustainable way
              of living and working.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
