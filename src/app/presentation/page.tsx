"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { decodeConfig } from "@/lib/presentation-codec";
import { getLoft } from "@/data/lofts";
import PresentationPage from "@/components/presentation/PresentationPage";

function PresentationContent() {
  const searchParams = useSearchParams();
  const encoded = searchParams.get("d");

  if (!encoded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <div className="text-center">
          <p className="text-white/60 text-lg">Презентация не найдена</p>
          <a href="/" className="text-brand-gold mt-4 inline-block hover:underline">
            Вернуться к генератору
          </a>
        </div>
      </div>
    );
  }

  const config = decodeConfig(encoded);
  if (!config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <div className="text-center">
          <p className="text-white/60 text-lg">Ошибка загрузки презентации</p>
          <a href="/" className="text-brand-gold mt-4 inline-block hover:underline">
            Вернуться к генератору
          </a>
        </div>
      </div>
    );
  }

  const loft = getLoft(config.l);
  if (!loft) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <div className="text-center">
          <p className="text-white/60 text-lg">Лофт не найден</p>
          <a href="/" className="text-brand-gold mt-4 inline-block hover:underline">
            Вернуться к генератору
          </a>
        </div>
      </div>
    );
  }

  return <PresentationPage config={config} loft={loft} />;
}

export default function PresentationRoute() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-brand-dark">
          <div className="text-brand-gold animate-pulse text-lg">Загрузка...</div>
        </div>
      }
    >
      <PresentationContent />
    </Suspense>
  );
}
