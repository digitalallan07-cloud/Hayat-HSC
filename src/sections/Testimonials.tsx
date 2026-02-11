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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Restaurant Owner',
      avatar: '/images/avatar-sarah.jpg',
      content: 'AppleKing has been our trusted supplier for 5 years. Their consistency in quality and reliability in delivery is unmatched. Our customers always compliment the freshness of our apple desserts.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Grocery Chain Manager',
      avatar: '/images/avatar-michael.jpg',
      content: 'Working with AppleKing transformed our produce section. Their custom packaging solutions helped us increase apple sales by 40%. Truly a partnership that delivers results.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Food Distributor',
      avatar: '/images/avatar-emma.jpg',
      content: 'The export services are exceptional. From documentation to cold chain management, AppleKing handles everything professionally. They have made international shipping seamless.',
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--apple-off-white)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--apple-red)]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[var(--apple-green)]/5 rounded-full blur-3xl" />
      
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            className="text-4xl sm:text-5xl font-bold font-['Poppins'] text-[var(--apple-black)] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.6s var(--ease-smooth-glide)',
            }}
          >
            What Our Clients Say
          </h2>
          <div 
            className="w-24 h-1 bg-gradient-red mx-auto rounded-full"
            style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.5s var(--ease-power-out) 0.3s',
            }}
          />
        </div>
        
        {/* Testimonials Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s var(--ease-smooth-glide) 0.2s',
          }}
        >
          {/* Main Card */}
          <div 
            className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl"
            style={{ perspective: '1000px' }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-red rounded-xl flex items-center justify-center shadow-lg">
              <Quote className="w-6 h-6 text-white" />
            </div>
            
            {/* Testimonial Content */}
            <div className="pt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className={`transition-all duration-500 ${
                    index === activeIndex 
                      ? 'opacity-100 visible' 
                      : 'opacity-0 invisible absolute inset-0'
                  }`}
                  style={{
                    transform: index === activeIndex ? 'rotateY(0deg)' : 'rotateY(-45deg)',
                    transitionTimingFunction: 'var(--ease-smooth-glide)',
                  }}
                >
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-xl sm:text-2xl text-[var(--apple-dark-gray)] leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[var(--apple-red)]/20"
                    />
                    <div>
                      <p className="font-bold text-[var(--apple-black)]">{testimonial.name}</p>
                      <p className="text-sm text-[var(--apple-medium-gray)]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Prev Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--apple-dark-gray)] hover:bg-[var(--apple-red)] hover:text-white transition-all duration-200 hover:scale-110"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.4s var(--ease-elastic-snap) 0.8s',
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-[var(--apple-red)] w-8' 
                      : 'bg-[var(--apple-medium-gray)]/30 hover:bg-[var(--apple-medium-gray)]/50'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.3s var(--ease-smooth-glide) ${0.9 + index * 0.1}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[var(--apple-dark-gray)] hover:bg-[var(--apple-red)] hover:text-white transition-all duration-200 hover:scale-110"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transition: 'all 0.4s var(--ease-elastic-snap) 0.8s',
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
