"use client";

import { Loft, PresentationConfig } from "@/data/types";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function IncludedSection({ config, loft }: Props) {
  const pkg = loft.packages.find((p) => p.slug === config.p);
  if (!pkg) return null;

  return (
    <section className="section-dark py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
            Пакет {pkg.name}
          </span>
          <div className="gold-line mx-auto mt-3 mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading text-white">
            Что входит в аренду
          </h2>
        </div>

        {/* Категории с items */}
        <div className="grid md:grid-cols-2 gap-8">
          {pkg.included.map((category) => (
            <div
              key={category.category}
              className="p-6 bg-white/5 rounded-xl border border-white/10"
            >
              <h3 className="text-lg font-heading text-brand-gold mb-4">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
