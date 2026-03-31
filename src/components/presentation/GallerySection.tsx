"use client";

import { Loft } from "@/data/types";

interface Props {
  loft: Loft;
}

export default function GallerySection({ loft }: Props) {
  if (!loft.images.gallery.length) return null;

  return (
    <section className="section-cream py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
            Фотогалерея
          </span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading text-brand-dark">
            Пространство
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {loft.images.gallery.map((src, i) => {
            const labels = ["Основной зал", "Welcome-зона", "Веранда"];
            return (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl overflow-hidden relative group"
                style={{
                  background: `linear-gradient(135deg, #2A2A2A ${i * 10}%, #1A1A1A 50%, #C9A96E20 100%)`,
                }}
              >
                <img
                  src={src}
                  alt={`${loft.name} — фото ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-sm font-heading">
                    {labels[i] || `Фото ${i + 1}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
