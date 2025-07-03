"use client";

import { useState, useEffect } from "react";

export function PhoneCarousel() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Our Health Mission",
      description:
        "Our mission at Shalom Health Care Services is to abide by the Department of Disability Services (DDS) standards to provide innovative high-quality services that will enable people with disabilities to lead meaningful and productive lives as vital members of their families, schools, workplaces, and communities in every neighborhood in the District of Columbia.",
      image: "/logo.webp",
    },
    {
      id: 2,
      title: "Experience and Professionalism",
      description:
        "With years of experience, our community support and cliental team will assess you and create a custom recovery plan that's right for you. We understand the importance of educating you on the most effective ways to take care of your days in the community.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Quote From The Shalom Team",
      description:
        "Keeping Your Health in Mind. Not knowing where or how to step next in this big world can be scary but having an extra pair of legs can help. At Shalom Health we have a wonderful, knowledgeable, experienced, and committed team to give you an extra pair of legs to live safely, calmly, and proudly in the community. In our community we stand TOGETHER!",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);


  return (
    <section className="py-12 bg-[#f8fafc] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Mobile: Show all text at the top */}
      <div className="block md:hidden w-full max-w-xl mx-auto mb-8 px-4">
        <h1 className="text-3xl font-bold text-purple-900 mb-1 text-center">The Practice</h1>
        <h2 className="text-xl font-semibold text-purple-700 mb-2 text-center">Shalom Health Care Services</h2>
        <div className="space-y-2 text-center">
          <div>
            <h3 className="font-bold text-lg text-gray-900">Our Health Mission</h3>
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Experience and Professionalism</h3>
          </div>
        </div>
      </div>
      <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-purple-900 mb-2">The Practice</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Providing compassionate, professional healthcare services with a commitment to excellence and dignity for
            every individual we serve.
          </p>
        </div>

      {/* Desktop: Carousel with 3 slides, center active */}
      <div className="hidden my-5 md:flex w-full max-w-5xl justify-center items-center space-x-6">
        {slides.map((slide, idx) => {
          // Calculate position relative to currentSlide
          const pos = idx - currentSlide;
          let className =
            "w-80 h-[500px] rounded-3xl bg-white shadow-xl overflow-hidden transition-all duration-700 flex-shrink-0";
          if (pos === 0) {
            className += " scale-95 opacity-80 z-10";
          } else if (Math.abs(pos) === 1) {
            className += " scale-95 opacity-80 z-10";
          } else {
            className += " scale-95 opacity-80 z-10";
          }
          return (
            <div key={slide.id} className={className}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-2/5 object-cover rounded-t-3xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{slide.title}</h3>
                <p className="text-sm text-gray-600 text-center">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

   

      {/* Mobile: Show the active slide in the phone mockup */}
      <div className="md:hidden w-full flex justify-center mt-12 mx-auto">
        <div className="relative z-40">
          <div className="relative w-80 h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl mx-auto">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-30"></div>
              {/* Main Image */}
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-3/5 object-cover rounded-t-[2rem]"
                style={{ objectPosition: "center" }}
              />
              {/* Content Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {slides[currentSlide].description}
                </p>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
