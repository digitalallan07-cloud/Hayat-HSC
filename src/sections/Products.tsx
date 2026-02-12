import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Products = () => {
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

  const products = [
    {
      name: 'Honeycrisp',
      tag: 'Best Seller',
      description: 'Exceptionally crisp and juicy with a perfect sweet-tart balance that makes it a favorite worldwide.',
      image: '/images/apple-honeycrisp.jpg',
    },
    {
      name: 'Granny Smith',
      tag: 'Tart Favorite',
      description: 'Bright green skin with a sharp, refreshing tart flavor ideal for baking and fresh eating.',
      image: '/images/apple-granny.jpg',
    },
    {
      name: 'Fuji',
      tag: 'Super Sweet',
      description: 'Incredibly sweet with dense, crunchy flesh — a true crowd-pleaser for all occasions.',
      image: '/images/apple-fuji.jpg',
    },
    {
      name: 'Gala',
      tag: 'All Purpose',
      description: 'Mildly sweet and aromatic, perfect for snacking, salads, or pairing with cheese.',
      image: '/images/apple-gala.jpg',
    },
    {
      name: 'Red Delicious',
      tag: 'Classic',
      description: 'The iconic deep red apple with mild sweetness and a satisfying crisp texture.',
      image: '/images/apple-red-delicious.jpg',
    },
    {
      name: 'Pink Lady',
      tag: 'Premium',
      description: 'Elegant blush skin with a complex sweet-tart flavor profile and firm, fine-grained flesh.',
      image: '/images/apple-pink-lady.jpg',
    },
  ];

  return (
    <section id="products" ref={sectionRef} className="py-24 lg:py-32 bg-white relative overflow-hidden">
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
            Our Harvest
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-heading text-[var(--hayat-charcoal)] mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s var(--ease-power) 0.1s',
            }}
          >
            Premium Apple <span className="italic text-[var(--hayat-red)]">Varieties</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
            <div className="w-2 h-2 bg-[var(--hayat-gold)] rounded-full" />
            <div className="w-16 h-[1px] bg-[var(--hayat-gold)]" />
          </div>
          <p
            className="text-[var(--hayat-gray)] text-base leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s var(--ease-power) 0.2s',
            }}
          >
            Each variety is hand-selected and harvested at peak ripeness, ensuring the finest flavor and quality reach your table.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group relative bg-white border border-[var(--hayat-light-gray)] hover:border-[var(--hayat-red)]/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.6s var(--ease-power) ${0.2 + index * 0.08}s`,
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Tag */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 text-[var(--hayat-charcoal)] text-[10px] font-sans-elegant uppercase tracking-[0.15em]">
                  {product.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-[var(--hayat-charcoal)] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--hayat-gray)] leading-relaxed mb-4">
                  {product.description}
                </p>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center gap-2 text-[var(--hayat-red)] font-sans-elegant text-xs uppercase tracking-[0.12em] font-medium hover:gap-3 transition-all duration-200 group/link"
                >
                  Inquire Now
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
