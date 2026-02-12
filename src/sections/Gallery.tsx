import { useEffect, useRef, useState } from 'react';

const galleryImages = [
  {
    src: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/Golden%20orchard%20at%20sunset.png',
    alt: 'Hayat HSC Orchard Landscape',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://shapesdefined.sirv.com/WP_we-demo.xyz/2023/05/Hayat%20HSC/new%20file2_page-0001.jpg',
    alt: 'Apple Harvest Season',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=1649WdJ1AqoR5gUfAXYXp_Aad3NAd9-Tw&sz=w600',
    alt: 'Our Apple Trees',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=1Eg6zinbaCO9tVnCUXrMQk2o_0_iYpY58&sz=w600',
    alt: 'Fresh Red Apples',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://drive.google.com/thumbnail?id=1Z7dlPiD2rxLML5KiSOm00Nr-VzY-CCZ2&sz=w800',
    alt: 'Apple Farm Operations',
    span: 'col-span-1 row-span-1',
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px] lg:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`${image.span} relative overflow-hidden group`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transition: `all 0.6s var(--ease-power) ${0.2 + index * 0.1}s`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--hayat-green-dark)]/0 group-hover:bg-[var(--hayat-green-dark)]/30 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-sans-elegant">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
