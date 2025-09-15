import Image from 'next/image';

export default function RibbonBanner() {
  const features = [
    'Accessible',
    'Responsive', 
    'Dynamic',
    'Scalable',
    'Search Optimized',
    'Interactive',
    'Secure',
    'Reliable',
    'Engaging'
  ];

  return (
    <section className="my-20 py-20">
      {/* Background ribbon with 3D effect */}
      <div className="z-0 translate-y-10 rotate-6 bg-linear-to-r from-[#6799fe] to-[#0255fb] py-3 opacity-60 md:rotate-3 lg:translate-y-16 lg:py-6"></div>
      
      {/* Main ribbon with scrolling text */}
      <div className="z-2 -mx-1 flex -rotate-3 items-center justify-center overflow-x-clip bg-linear-to-r from-[#6799fe] to-[#0255fb] py-1 lg:py-2">
        <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--duration:30s]">
          {/* First set of features */}
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
            {features.map((feature, index) => (
              <div key={`first-${index}`} className="inline-flex items-center gap-2 lg:gap-4">
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  {feature}
                </span>
                <Image
                  src="/star.svg"
                  className="w-5 lg:w-7"
                  alt="star"
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless scrolling */}
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
            {features.map((feature, index) => (
              <div key={`second-${index}`} className="inline-flex items-center gap-2 lg:gap-4">
                <span className="text-sm leading-6 font-semibold tracking-[0.2em] text-gray-50 uppercase md:text-lg lg:text-xl">
                  {feature}
                </span>
                <Image
                  src="/star.svg"
                  className="w-5 lg:w-7"
                  alt="star"
                  width={28}
                  height={28}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
