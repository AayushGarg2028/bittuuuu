import { useEffect, useRef, useState } from "react";

interface PhotoItem {
  src: string;
  alt: string;
}

const photos: PhotoItem[] = [
  {
    src: "/gallery-1.jpg",
    alt: "A cherished moment",
  },
  {
    src: "/gallery-2.jpg",
    alt: "Beautiful memory",
  },
  {
    src: "/gallery-3.jpg",
    alt: "Special times",
  },
  {
    src: "/gallery-4.jpg",
    alt: "Together",
  },
];

const PhotoGallery = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="text-rose text-xs tracking-[0.25em] uppercase font-body font-light block mb-4">
            Moments
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Our Memories
          </h2>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`image-card aspect-[4/5] md:aspect-[3/4] bg-cream-dark transition-all duration-700 ease-out ${
                visibleItems.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
