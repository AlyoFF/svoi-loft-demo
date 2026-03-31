"use client";

import { Loft } from "@/data/types";

interface Props {
  loft: Loft;
}

export default function Footer({ loft }: Props) {
  return (
    <footer className="bg-brand-dark border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-brand-gold text-sm tracking-[0.2em] uppercase mb-3">
          {loft.name}
        </p>
        <p className="text-white/40 text-sm mb-4">{loft.address}</p>

        {/* Соцсети */}
        <div className="flex justify-center gap-6 mb-6">
          {loft.social.vk && (
            <span className="text-white/40 text-sm hover:text-brand-gold transition-colors">
              VK: {loft.social.vk}
            </span>
          )}
          {loft.social.instagram && (
            <span className="text-white/40 text-sm hover:text-brand-gold transition-colors">
              {loft.social.instagram}
            </span>
          )}
        </div>

        <div className="gold-line mx-auto mb-4" />
        <p className="text-white/20 text-xs">
          Персонализированное предложение создано специально для вас
        </p>
      </div>
    </footer>
  );
}
