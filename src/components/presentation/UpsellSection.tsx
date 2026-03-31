"use client";

import { PresentationConfig } from "@/data/types";
import { additionalOptions, getOption } from "@/data/options";
import { getEventType } from "@/data/event-types";
import { formatRubles } from "@/lib/price-utils";

interface Props {
  config: PresentationConfig;
}

export default function UpsellSection({ config }: Props) {
  const selectedOptions = config.o
    .map((slug) => getOption(slug))
    .filter(Boolean);

  // Если опции не выбраны, показываем рекомендуемые для типа мероприятия
  const eventConfig = getEventType(config.e);
  const recommendedSlugs = eventConfig?.suggestedOptions || [];
  const recommendedOptions = recommendedSlugs
    .map((slug) => getOption(slug))
    .filter(Boolean)
    .filter((opt) => !config.o.includes(opt!.slug));

  const hasSelected = selectedOptions.length > 0;
  const hasRecommended = recommendedOptions.length > 0;

  if (!hasSelected && !hasRecommended) return null;

  return (
    <section className="section-dark py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Выбранные опции */}
        {hasSelected && (
          <>
            <div className="text-center mb-12">
              <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
                Дополнительно
              </span>
              <div className="gold-line mx-auto mt-3 mb-6" />
              <h2 className="text-3xl md:text-4xl font-heading text-white">
                Ваши опции
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {selectedOptions.map((opt) => (
                <div
                  key={opt!.slug}
                  className="p-6 bg-white/5 rounded-xl border border-brand-gold/30"
                >
                  <div className="text-3xl mb-3">{opt!.icon}</div>
                  <h3 className="text-lg font-heading text-white mb-2">
                    {opt!.name}
                  </h3>
                  {opt!.description && (
                    <p className="text-sm text-white/60 mb-3">{opt!.description}</p>
                  )}
                  <p className="text-brand-gold font-body">
                    {opt!.price > 0
                      ? `${formatRubles(opt!.price)} ${opt!.unit}`
                      : opt!.unit}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Рекомендуемые опции */}
        {hasRecommended && (
          <>
            <div className="text-center mb-12">
              {!hasSelected && (
                <>
                  <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
                    Дополнительно
                  </span>
                  <div className="gold-line mx-auto mt-3 mb-6" />
                </>
              )}
              <h2 className="text-2xl md:text-3xl font-heading text-white">
                {hasSelected ? "Рекомендуем также" : "Рекомендуем для вашего мероприятия"}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedOptions.map((opt) => (
                <div
                  key={opt!.slug}
                  className="p-6 bg-white/5 rounded-xl border border-white/10 opacity-80"
                >
                  <div className="text-3xl mb-3">{opt!.icon}</div>
                  <h3 className="text-lg font-heading text-white mb-2">
                    {opt!.name}
                  </h3>
                  {opt!.description && (
                    <p className="text-sm text-white/60 mb-3">{opt!.description}</p>
                  )}
                  <p className="text-brand-gold/70 font-body text-sm">
                    {opt!.price > 0
                      ? `${formatRubles(opt!.price)} ${opt!.unit}`
                      : opt!.unit}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
