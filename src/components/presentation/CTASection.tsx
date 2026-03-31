"use client";

import { Loft, PresentationConfig } from "@/data/types";
import { generateCtaTitle, generateCtaSubtitle } from "@/lib/content-generator";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function CTASection({ config, loft }: Props) {
  const title = generateCtaTitle(config.e);
  const subtitle = generateCtaSubtitle(config.e);

  return (
    <section className="section-dark py-20 md:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="gold-line mx-auto mb-8" />

        <h2 className="text-3xl md:text-4xl font-heading text-white mb-6">
          {title}
        </h2>

        <p className="text-lg text-white/70 font-body mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Комментарий менеджера */}
        {config.m && (
          <div className="mb-10 p-6 bg-white/5 rounded-xl border border-brand-gold/20 max-w-lg mx-auto">
            <p className="text-white/80 italic font-body text-sm">
              «{config.m}»
            </p>
            <p className="text-brand-gold/60 text-xs mt-2">— Ваш менеджер</p>
          </div>
        )}

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${loft.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Написать в WhatsApp
          </a>
          <a href={`tel:${loft.phone}`} className="btn-outline">
            Позвонить
          </a>
        </div>

        {/* Телефон */}
        <p className="mt-8 text-white/40 text-sm font-body">{loft.phone}</p>
      </div>
    </section>
  );
}
