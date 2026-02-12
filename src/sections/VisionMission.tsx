import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Heart, Leaf, ArrowRight } from 'lucide-react';

const VisionMission = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the world\'s most trusted apple farm, recognized for unparalleled quality, innovation in agriculture, and a commitment to nurturing both the land and the communities we serve.',
      image: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/apple%20vision.png',
      color: 'var(--hayat-gold)',
      accent: 'var(--hayat-gold-light)',
    },
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To deliver the freshest, most flavorful apples from our orchards to tables around the globe, using sustainable farming practices that honor the earth and exceed the expectations of every customer.',
      image: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/ChatGPT%20Image%20Feb%2012,%202026,%2001_09_26%20AM.png',
      color: 'var(--hayat-red)',
      accent: 'var(--hayat-red-light)',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, excellence, and sustainability guide every decision we make. We believe in transparent partnerships, ethical farming, and creating a positive impact for future generations.',
      image: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/apple%20value.png',
      color: 'var(--hayat-red)',
      accent: 'var(--hayat-red-light)',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Our orchards employ eco-friendly practices — from water conservation and organic soil management to biodiversity preservation — ensuring our farming leaves a positive footprint on the planet.',
      image: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/ChatGPT%20Image%20Feb%2012,%202026,%2001_11_25%20AM.png',
      color: 'var(--hayat-green)',
      accent: 'var(--hayat-green-light)',
    },
  ];

  return (
    <section id="vision" ref={sectionRef} className="relative overflow-hidden">
      {/* Section Header */}
      <div className="bg-[var(--hayat-cream)] pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 text-center">
          <p
            className="font-sans-elegant text-xs uppercase tracking-[0.3em] text-[var(--hayat-gold)] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 0.2s',
            }}
          >
            What Drives Us
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)] leading-tight mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.3s',
            }}
          >
            Rooted in <span className="italic text-[var(--hayat-green)]">Purpose</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="bg-[var(--hayat-cream)] pb-24 lg:pb-32">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((item, index) => {
              const isActive = activeCard === index;
              return (
                <div
                  key={item.title}
                  className="group relative cursor-pointer"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: `all 0.7s var(--ease-power) ${0.4 + index * 0.12}s`,
                  }}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(isActive ? null : index)}
                >
                  {/* Card */}
                  <div
                    className="relative overflow-hidden bg-white shadow-card transition-all duration-500"
                    style={{
                      transform: isActive ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: isActive
                        ? '0 20px 60px -12px rgba(0,0,0,0.15)'
                        : undefined,
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700"
                        style={{
                          transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        }}
                      />
                      {/* Image Overlay */}
                      <div
                        className="absolute inset-0 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`,
                          opacity: isActive ? 0.9 : 0.6,
                        }}
                      />

                      {/* Icon on Image */}
                      <div
                        className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border transition-all duration-500"
                        style={{
                          borderColor: isActive ? item.color : 'rgba(255,255,255,0.4)',
                          backgroundColor: isActive ? item.color : 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        <item.icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.9)' }}
                        />
                      </div>

                      {/* Title on Image */}
                      <div className="absolute bottom-4 left-5 right-5">
                        <h3 className="text-xl font-heading font-semibold text-white mb-1">
                          {item.title}
                        </h3>
                        <div
                          className="h-[2px] transition-all duration-500"
                          style={{
                            width: isActive ? '48px' : '24px',
                            backgroundColor: item.color,
                          }}
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p
                        className="text-sm text-[var(--hayat-gray)] leading-relaxed transition-all duration-500"
                        style={{
                          maxHeight: isActive ? '200px' : '60px',
                          overflow: 'hidden',
                        }}
                      >
                        {item.description}
                      </p>

                      {/* Read More Indicator */}
                      <div
                        className="flex items-center gap-2 mt-4 font-sans-elegant text-xs uppercase tracking-[0.12em] font-medium transition-all duration-300"
                        style={{ color: item.color }}
                      >
                        <span>{isActive ? 'Read Less' : 'Read More'}</span>
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform duration-300"
                          style={{
                            transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Bottom Accent Bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500"
                      style={{
                        backgroundColor: item.color,
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
