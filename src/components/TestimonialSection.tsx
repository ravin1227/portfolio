import Image from 'next/image';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      title: "A frontend developer who transforms visions into reality",
      content: "Ravindra has an exceptional ability to bring our design concepts to life. His attention to detail and dedication to creating seamless user experiences have greatly enhanced our projects. His skills in frontend development are truly impressive, and he's always ready to tackle any challenge that comes his way.",
      author: "Lena Torres",
      role: "Product Lead • Creatify",
      image: "/1.jpg",
      textColor: "text-black",
      background: "linear-gradient(rgb(255, 204, 222), rgb(153, 122, 133))"
    },
    {
      id: 2,
      title: "Efficient, innovative, and a pleasure to work with",
      content: "Working with Ravindra has been a fantastic experience. He's not only highly skilled in frontend technologies but also brings a refreshing creativity to every project. His ability to solve complex problems quickly and effectively makes him a key asset to our team. Plus, he's a great collaborator who makes the work environment better for everyone.",
      author: "Emma Thompson",
      role: "Senior Designer • PixelCraft",
      image: "/2.jpg",
      textColor: "text-white",
      background: "linear-gradient(rgb(72, 133, 255), rgb(2, 63, 186))"
    },
    {
      id: 3,
      title: "A reliable developer with a keen eye for detail",
      content: "Ravindra delivered exceptional work on our project. His meticulous approach and strong communication skills greatly enhanced the quality of our web applications. He's a dependable developer who collaborates seamlessly with the team.",
      author: "Ethan Parker",
      role: "Manager • TechFusion",
      image: "/3.jpg",
      textColor: "text-white",
      background: "linear-gradient(rgb(87, 56, 175), rgb(36, 23, 73))"
    },
    {
      id: 4,
      title: "Consistent excellence in every project",
      content: "Ravindra is a standout frontend developer. His ability to deliver high-quality code and engaging user interfaces consistently makes him a valuable team member. He's proactive, reliable, and always willing to go the extra mile to ensure the success of our projects. It's been a pleasure working with him, and I look forward to future collaborations.",
      author: "Ryan Mitchell",
      role: "CTO • Innovate Solutions",
      image: "/4.jpg",
      textColor: "text-white",
      background: "linear-gradient(rgb(15, 88, 136), rgb(0, 47, 78))"
    },
    {
      id: 5,
      title: "A master of frontend development with a keen design sensibility",
      content: "Ravindra is a fantastic frontend developer! He took our requirements and turned them into something amazing. His attention to detail, creativity, and clear communication made the whole process smooth. We're extremely happy with the results and would highly recommend him!",
      author: "Emily Thompson",
      role: "Creative Director • H. Studios",
      image: "/5.jpg",
      textColor: "text-white",
      background: "linear-gradient(rgb(2, 156, 114), rgb(0, 75, 54))"
    }
  ];

  return (
    <section className="my-32 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] md:mt-32">
      <h2 
        style={{textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'}}
        className="relative z-2 mb-20 text-4xl font-medium tracking-tight sm:text-5xl md:mb-36 md:text-6xl text-balance text-center mt-44 md:mt-28 mb-16! mx-12 md:mx-2"
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
          TESTIMONIALS
        </p>
        <span className="">
          <span className="">Word on the street</span>{' '}
          <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">about me</span>
        </span>
      </h2>
      
      <div className="mx-auto w-full overflow-hidden">
        <div className="-ml-2 flex touch-pan-y gap-2 will-change-transform sm:-ml-3 sm:gap-3 md:-ml-4 md:gap-4 animate-testimonial-rotate">
          {testimonials.map((testimonial) => (
            <div key={`first-${testimonial.id}`} className="pointer-events-none">
              <div 
                className={`relative flex h-[370px] w-[300px] flex-col justify-between overflow-hidden rounded-2xl p-5 antialiased select-none md:h-[440px] md:w-[400px] md:rounded-3xl lg:px-6 lg:py-7 ${testimonial.textColor}`}
                style={{ background: testimonial.background }}
              >
                <div>
                  <h4 className="mb-5 text-lg font-bold tracking-wide md:text-xl">
                    {testimonial.title}
                  </h4>
                  <p className="mb-3 line-clamp-7 text-base font-extralight tracking-tight md:line-clamp-10 md:text-lg">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="size-11 rounded-full lg:size-14 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <span className="text-base font-bold tracking-wide md:text-xl">
                      {testimonial.author}
                    </span>
                    <p className="text-sm opacity-80 md:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless scrolling */}
          {testimonials.map((testimonial) => (
            <div key={`second-${testimonial.id}`} className="pointer-events-none">
              <div 
                className={`relative flex h-[370px] w-[300px] flex-col justify-between overflow-hidden rounded-2xl p-5 antialiased select-none md:h-[440px] md:w-[400px] md:rounded-3xl lg:px-6 lg:py-7 ${testimonial.textColor}`}
                style={{ background: testimonial.background }}
              >
                <div>
                  <h4 className="mb-5 text-lg font-bold tracking-wide md:text-xl">
                    {testimonial.title}
                  </h4>
                  <p className="mb-3 line-clamp-7 text-base font-extralight tracking-tight md:line-clamp-10 md:text-lg">
                    {testimonial.content}
                  </p>
                </div>
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="size-11 rounded-full lg:size-14 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.author.split(' ').map(name => name[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <span className="text-base font-bold tracking-wide md:text-xl">
                      {testimonial.author}
                    </span>
                    <p className="text-sm opacity-80 md:text-base">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}