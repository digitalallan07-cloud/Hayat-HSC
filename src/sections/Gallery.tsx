import { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const galleryImages = [
  {
    src: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/ChatGPT%20Image%20Feb%2012%2C%202026%2C%2009_55_29%20PM.png',
    alt: 'Hayat HSC Farm',
  },
  {
    src: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/Golden%20orchard%20at%20sunset.png',
    alt: 'Hayat HSC Orchard Landscape',
  },
  {
    src: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/new%20file2_page-0001.jpg',
    alt: 'Apple Harvest Season',
  },
  {
    src: '/images/apple-honeycrisp.jpg',
    alt: 'Our Apple Trees',
  },
  {
    src: '/images/apple-fuji.jpg',
    alt: 'Fresh Red Apples',
  },
  {
    src: '/images/apple-gala.jpg',
    alt: 'Apple Farm Operations',
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block text-[var(--hayat-gold)] font-sans-elegant text-xs uppercase tracking-[0.25em] mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power)',
            }}
          >
            From Our Orchards
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.1s',
            }}
          >
            A Glimpse of <span className="italic text-[var(--hayat-green)]">Our Farm</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
        </div>

        {/* Gallery Slider */}
        <div
          className="max-w-5xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s var(--ease-power) 0.3s',
          }}
        >
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative overflow-hidden rounded-lg aspect-[16/9] group">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[var(--hayat-green-dark)]/0 group-hover:bg-[var(--hayat-green-dark)]/20 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
                      <p className="text-white text-sm font-sans-elegant">{image.alt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white border-none shadow-lg" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white border-none shadow-lg" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
