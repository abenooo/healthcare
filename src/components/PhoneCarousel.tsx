"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function PhoneCarousel() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Activity Tracking",
      description:
        "Record daily steps, distance, calories burned, and active minutes.",
      image:
        "https://media.istockphoto.com/id/2158885687/photo/older-man-exercising-seaside-with-fitness-watch-and-music.webp?a=1&b=1&s=612x612&w=0&k=20&c=EN44Dr-Od7TrutLBejayoFkfA0aL9ntOxqEs4o5l3iU=",
    },
    {
      id: 2,
      title: "Nutrition Tracking",
      description:
        "Log food intake, track macronutrients, and monitor calorie consumption.",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Vital Signs Monitoring",
      description:
        "Track vital signs such as heart rate, blood pressure, and blood glucose levels.",
      image:
        "https://media.istockphoto.com/id/1306500573/photo/nurse-monitoring-a-premature-newborn-in-an-incubator-while-wearing-a-facemask.webp?a=1&b=1&s=612x612&w=0&k=20&c=RxeqUh1wecpw4MhYeOQWfm7tWkl1UUfDwEOSjD7WvFo=&w=800&q=80",
    },
    {
      id: 5,
      title: "Medication Tracking",
      description:
        "Set reminders for medication intake, track adherence, and receive refill notifications.",
      image:
        "https://media.istockphoto.com/id/2212193377/photo/modern-medicine-and-pharmaceutical-advancements.webp?a=1&b=1&s=612x612&w=0&k=20&c=OMqEQxBpPYSUJoG8cnWXEtssWv7dT4vyZaWN6NbgBeY=&w=800&q=80",
    },
    {
      id: 6,
      title: "Symptom Tracking",
      description: "Record symptoms and duration to identify health patterns.",
      image:
        "https://plus.unsplash.com/premium_photo-1682126237121-905308172ca0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN5bXB0b20lMjBUcmFja2luZ3xlbnwwfHwwfHx8MA%3D%3D&w=800&q=80",
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  // For infinite row effect
  const getDisplaySlides = () => {
    // Show all slides, but order so current is centered
    const before = slides.slice(0, currentSlide);
    const after = slides.slice(currentSlide + 1);
    return [
      ...after,
      ...slides.slice(currentSlide, currentSlide + 1),
      ...before,
    ];
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="py-20 bg-[#f8fafc] min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative w-full max-w-7xl flex items-center justify-center">
        {/* All images in a row for large screens */}
        <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 z-10 justify-center space-x-6 pointer-events-none">
          {slides.map((slide, idx) => {
            // Calculate distance from current slide (circular)
            let distance = Math.abs(idx - currentSlide);
            if (distance > slides.length / 2) {
              distance = slides.length - distance;
            }
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`
                  w-72 h-[500px] rounded-3xl bg-white shadow-xl overflow-hidden transition-all duration-700
                  ${
                    isActive
                      ? "opacity-100 blur-0 scale-100 z-20"
                      : distance === 1
                      ? "opacity-60 blur-sm scale-95 z-10"
                      : "opacity-30 blur-md scale-90 z-0"
                  }
                `}
                style={{
                  pointerEvents: "none",
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows (desktop only) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 rounded-full items-center justify-center hover:bg-black transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/80 rounded-full items-center justify-center hover:bg-black transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Phone Mockup (always visible) */}
        <div className="relative z-40">
          <div className="relative w-80 h-[600px] bg-black rounded-[2.5rem] p-2 shadow-2xl mx-auto">
            <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-30"></div>
              {/* Main Image */}
              <img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-3/5 object-cover rounded-t-[2rem]"
                style={{ objectPosition: "center" }}
              />
              {/* Content Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl shadow-lg">
                {/* Pulse Line Icon */}
                <div className="flex justify-center mb-4">
                  <svg
                    width="40"
                    height="20"
                    viewBox="0 0 40 20"
                    className="text-green-500"
                  >
                    <path
                      d="M2 10 L8 10 L10 5 L12 15 L14 8 L16 12 L18 10 L38 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {currentSlideData.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mb-4">
                  {currentSlideData.description}
                </p>
                <div className="text-center">
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors">
                    Find Out More
                  </button>
                </div>
              </div>
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-black rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mobile navigation arrows (show only on mobile) */}
        <button
          onClick={prevSlide}
          className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Counter & Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-500 text-sm mb-2">
          {currentSlide + 1} of {slides.length}
        </span>
        <div className="flex items-center space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "bg-gray-900 w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`mt-4 text-sm px-4 py-2 rounded-full transition-all duration-300 ${
            isAutoPlaying
              ? "bg-green-100 text-green-700 hover:bg-green-200"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {isAutoPlaying ? "⏸️ Auto-playing" : "▶️ Play"}
        </button>
      </div>
    </section>
  );
}
