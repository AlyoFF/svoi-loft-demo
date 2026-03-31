"use client";

import { Loft, PresentationConfig } from "@/data/types";
import {
  formatPrice,
  getCurrentPriceRange,
  formatRubles,
  calculateOptionsTotal,
} from "@/lib/price-utils";
import { additionalOptions } from "@/data/options";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function PriceSection({ config, loft }: Props) {
  const priceRange = getCurrentPriceRange(loft, config.p);
  const mainPrice = formatPrice(config.f, config.fp, priceRange);

  const optionsTotal = calculateOptionsTotal(config.o, additionalOptions);
  const pkg = loft.packages.find((p) => p.slug === config.p);

  return (
    <section className="section-cream py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Заголовок */}
        <span className="text-brand-gold text-sm tracking-[0.2em] uppercase font-body">
          Стоимость
        </span>
        <div className="gold-line mx-auto mt-3 mb-8" />

        {/* Пакет */}
        {pkg && (
          <p className="text-brand-dark/60 text-lg mb-4 font-body">
            Пакет «{pkg.name}»
          </p>
        )}

        {/* Главная цена */}
        <div className="text-4xl md:text-6xl font-heading text-brand-dark mb-4">
          {mainPrice}
        </div>

        {/* Доп. опции */}
        {optionsTotal > 0 && (
          <p className="text-lg text-brand-dark/60 font-body mb-2">
            + дополнительные опции: {formatRubles(optionsTotal)}
          </p>
        )}

        {/* Пояснение */}
        <div className="mt-8 p-6 bg-white rounded-xl shadow-sm max-w-lg mx-auto">
          <p className="text-sm text-brand-dark/50 leading-relaxed">
            * Цены указаны до учёта налогов. Безналичный расчёт +15%.
            <br />
            Страховой депозит: {formatRubles(loft.insuranceDeposit)} (возвращается).
            <br />
            Итоговая стоимость зависит от даты, продолжительности и состава услуг.
          </p>
        </div>
      </div>
    </section>
  );
}
