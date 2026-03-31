"use client";

import { Loft, PresentationConfig } from "@/data/types";
import { generateDescription } from "@/lib/content-generator";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function AboutSection({ config, loft }: Props) {
  const description = generateDescription(config, loft);

  const stats = [
    { value: `${loft.totalArea}`, unit: "м²", label: "общая площадь" },
    { value: `${loft.capacity.cocktail}`, unit: "чел", label: "вместимость фуршет" },
    { value: `${loft.capacity.banquet}`, unit: "чел", label: "банкетная рассадка" },
    { value: `${loft.zones.length}`, unit: "", label: "зоны пространства" },
  ];

  return (
    <section className="section-cream py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
            О площадке
          </span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading text-brand-dark mb-6">
            {loft.tagline}
          </h2>
          <p className="text-lg text-brand-dark/70 font-body max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white rounded-xl shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-heading text-brand-gold mb-1">
                {stat.value}
                {stat.unit && (
                  <span className="text-xl ml-1 text-brand-gold/70">{stat.unit}</span>
                )}
              </div>
              <div className="text-sm text-brand-dark/60 font-body">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Зоны */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {loft.zones.map((zone) => (
            <div
              key={zone.name}
              className="p-6 bg-white rounded-xl shadow-sm border border-brand-cream-dark"
            >
              <h3 className="text-lg font-heading text-brand-dark mb-2">{zone.name}</h3>
              <p className="text-brand-gold text-2xl font-heading mb-2">{zone.area} м²</p>
              {zone.description && (
                <p className="text-sm text-brand-dark/60">{zone.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Оснащение */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {loft.facilities.map((facility) => (
            <span
              key={facility}
              className="px-4 py-2 bg-white rounded-full text-sm text-brand-dark/70 border border-brand-cream-dark"
            >
              {facility}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
