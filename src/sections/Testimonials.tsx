import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Restaurant Owner',
      avatar: '/images/avatar-sarah.jpg',
      content: 'Hayat HSC has been our trusted supplier for 5 years. Their consistency in quality and reliability in delivery is unmatched. Our customers always compliment the freshness of our apple desserts.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Grocery Chain Manager',
      avatar: '/images/avatar-michael.jpg',
      content: 'Working with Hayat HSC transformed our produce section. Their custom packaging solutions helped us increase apple sales by 40%. Truly a partnership that delivers results.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Food Distributor',
      avatar: '/images/avatar-emma.jpg',
      content: 'The export services are exceptional. From documentation to cold chain management, Hayat HSC handles everything professionally. They have made international shipping seamless.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block text-[var(--hayat-gold)] font-sans-elegant text-xs uppercase tracking-[0.25em] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power)',
            }}
          >
            Testimonials
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.1s',
            }}
          >
            What Our <span className="italic text-[var(--hayat-green)]">Clients Say</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s var(--ease-power) 0.3s',
          }}
        >
          <div className="relative bg-[var(--hayat-cream)] p-10 sm:p-14">
            {/* Quote Icon */}
            <div className="absolute -top-5 left-10 w-10 h-10 bg-[var(--hayat-red)] flex items-center justify-center">
              <Quote className="w-5 h-5 text-white" />
            </div>

            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`transition-all duration-500 ${
                  index === activeIndex ? 'opacity-100 visible' : 'opacity-0 invisible absolute inset-0 p-10 sm:p-14'
                }`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--hayat-gold)] text-[var(--hayat-gold)]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl sm:text-2xl font-heading text-[var(--hayat-charcoal)] leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover border border-[var(--hayat-light-gray)]"
                  />
                  <div>
                    <p className="font-sans-elegant font-semibold text-sm text-[var(--hayat-charcoal)] uppercase tracking-wider">{testimonial.name}</p>
                    <p className="text-xs text-[var(--hayat-gray)] font-sans-elegant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-[var(--hayat-light-gray)] flex items-center justify-center text-[var(--hayat-gray)] hover:bg-[var(--hayat-red)] hover:border-[var(--hayat-red)] hover:text-white transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-[2px] transition-all duration-300 ${
                    index === activeIndex ? 'bg-[var(--hayat-red)] w-8' : 'bg-[var(--hayat-light-gray)] w-4'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-[var(--hayat-light-gray)] flex items-center justify-center text-[var(--hayat-gray)] hover:bg-[var(--hayat-red)] hover:border-[var(--hayat-red)] hover:text-white transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
