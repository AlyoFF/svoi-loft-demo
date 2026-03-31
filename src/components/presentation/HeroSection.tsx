"use client";

import { Loft, PresentationConfig } from "@/data/types";
import { generateHeroTitle, generateHeroSubtitle, generateGreeting } from "@/lib/content-generator";

interface Props {
  config: PresentationConfig;
  loft: Loft;
}

export default function HeroSection({ config, loft }: Props) {
  const title = generateHeroTitle(config, loft);
  const subtitle = generateHeroSubtitle(config);
  const greeting = generateGreeting(config);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновое изображение с затемнением */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-brand-dark"
        style={{
          backgroundImage: `url(${loft.images.hero})`,
          backgroundColor: "#1A1A1A",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      {/* Декоративный паттерн поверх, если фото нет */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #C9A96E 1px, transparent 1px), radial-gradient(circle at 75% 75%, #C9A96E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Контент */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Логотип / бренд */}
        <div className="mb-8">
          <span className="text-brand-gold text-sm tracking-[0.3em] uppercase font-body">
            {loft.name}
          </span>
          <div className="gold-line mx-auto mt-3" />
        </div>

        {/* Персональное приветствие */}
        {greeting && (
          <p className="text-brand-gold-light text-xl md:text-2xl font-heading italic mb-6">
            {greeting}
          </p>
        )}

        {/* Заголовок */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight mb-6">
          {title}
        </h1>

        {/* Подзаголовок */}
        <p className="text-lg md:text-xl text-white/80 font-body max-w-2xl mx-auto mb-10">
          {subtitle}
        </p>

        {/* Скролл-индикатор */}
        <div className="animate-bounce mt-8">
          <svg
            className="w-6 h-6 text-brand-gold mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
