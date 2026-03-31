"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EventType, PriceFormat, PresentationConfig } from "@/data/types";
import { loftList } from "@/data/lofts";
import { eventTypes } from "@/data/event-types";
import { additionalOptions } from "@/data/options";
import { encodeConfig } from "@/lib/presentation-codec";
import { formatRubles } from "@/lib/price-utils";

export default function ManagerForm() {
  const router = useRouter();

  const [loftSlug, setLoftSlug] = useState(loftList[0].slug);
  const [eventType, setEventType] = useState<EventType>("wedding");
  const [guestCount, setGuestCount] = useState(100);
  const [packageSlug, setPackageSlug] = useState("premium");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [priceFormat, setPriceFormat] = useState<PriceFormat>("range");
  const [fixedPrice, setFixedPrice] = useState<number>(300000);
  const [clientName, setClientName] = useState("");
  const [managerComment, setManagerComment] = useState("");

  const selectedLoft = loftList.find((l) => l.slug === loftSlug) || loftList[0];

  function toggleOption(slug: string) {
    setSelectedOptions((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
  }

  function handleGenerate() {
    const config: PresentationConfig = {
      l: loftSlug,
      e: eventType,
      g: guestCount,
      p: packageSlug,
      o: selectedOptions,
      f: priceFormat,
      fp: priceFormat === "fixed" ? fixedPrice : undefined,
      c: clientName,
      m: managerComment || undefined,
    };

    const encoded = encodeConfig(config);
    // Открываем в той же вкладке (или в новой, если window.open не заблокирован)
    const url = `/presentation?d=${encoded}`;
    const newWindow = window.open(url, "_blank");
    if (!newWindow) {
      router.push(url);
    }
  }

  return (
    <div className="space-y-8">
      {/* 1. Выбор лофта */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Лофт
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {loftList.map((loft) => (
            <button
              key={loft.slug}
              onClick={() => setLoftSlug(loft.slug)}
              className={`p-5 rounded-xl border-2 text-left transition-all ${
                loftSlug === loft.slug
                  ? "border-brand-gold bg-brand-gold/5"
                  : "border-brand-cream-dark hover:border-brand-gold/40"
              }`}
            >
              <div className="font-heading text-lg text-brand-dark">{loft.name}</div>
              <div className="text-sm text-brand-dark/50 mt-1">
                {loft.totalArea} м² &middot; до {loft.capacity.cocktail} чел
              </div>
              <div className="text-xs text-brand-dark/40 mt-1">{loft.address}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Тип мероприятия */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Тип мероприятия
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {eventTypes.map((et) => (
            <button
              key={et.slug}
              onClick={() => setEventType(et.slug)}
              className={`p-4 rounded-xl border-2 text-center transition-all ${
                eventType === et.slug
                  ? "border-brand-gold bg-brand-gold/5"
                  : "border-brand-cream-dark hover:border-brand-gold/40"
              }`}
            >
              <div className="text-2xl mb-1">{et.icon}</div>
              <div className="text-sm font-medium text-brand-dark">{et.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Количество гостей */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Количество гостей
        </label>
        <div className="flex items-center gap-4">
          <input
            type="range"
            min={10}
            max={selectedLoft.capacity.cocktail}
            step={10}
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className="flex-1 accent-brand-gold"
          />
          <div className="w-20 text-center">
            <input
              type="number"
              min={10}
              max={selectedLoft.capacity.cocktail}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full text-center p-2 border border-brand-cream-dark rounded-lg text-brand-dark font-heading text-lg"
            />
          </div>
        </div>
        <p className="text-xs text-brand-dark/40 mt-1">
          Максимум для фуршета: {selectedLoft.capacity.cocktail} чел, банкет: {selectedLoft.capacity.banquet} чел
        </p>
      </div>

      {/* 4. Пакет */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Пакет
        </label>
        <div className="grid grid-cols-2 gap-4">
          {selectedLoft.packages.map((pkg) => (
            <button
              key={pkg.slug}
              onClick={() => setPackageSlug(pkg.slug)}
              className={`p-5 rounded-xl border-2 text-left transition-all ${
                packageSlug === pkg.slug
                  ? "border-brand-gold bg-brand-gold/5"
                  : "border-brand-cream-dark hover:border-brand-gold/40"
              }`}
            >
              <div className="font-heading text-lg text-brand-dark">{pkg.name}</div>
              <div className="text-xs text-brand-dark/50 mt-1">
                {pkg.included.reduce((sum, cat) => sum + cat.items.length, 0)} позиций
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Дополнительные опции */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Дополнительные опции
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {additionalOptions.map((opt) => (
            <button
              key={opt.slug}
              onClick={() => toggleOption(opt.slug)}
              className={`p-4 rounded-xl border-2 text-left transition-all flex items-start gap-3 ${
                selectedOptions.includes(opt.slug)
                  ? "border-brand-gold bg-brand-gold/5"
                  : "border-brand-cream-dark hover:border-brand-gold/40"
              }`}
            >
              <span className="text-xl flex-shrink-0">{opt.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-brand-dark">{opt.name}</div>
                <div className="text-xs text-brand-dark/40">
                  {opt.price > 0 ? formatRubles(opt.price) : opt.unit}
                  {opt.price > 0 && ` ${opt.unit}`}
                </div>
              </div>
              <div
                className={`w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                  selectedOptions.includes(opt.slug)
                    ? "bg-brand-gold border-brand-gold"
                    : "border-brand-cream-dark"
                }`}
              >
                {selectedOptions.includes(opt.slug) && (
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 6. Формат цены */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Формат цены
        </label>
        <div className="grid grid-cols-3 gap-3">
          {(
            [
              { value: "range", label: "Диапазон" },
              { value: "from", label: "От суммы" },
              { value: "fixed", label: "Фиксированная" },
            ] as { value: PriceFormat; label: string }[]
          ).map((pf) => (
            <button
              key={pf.value}
              onClick={() => setPriceFormat(pf.value)}
              className={`p-3 rounded-xl border-2 text-center transition-all text-sm ${
                priceFormat === pf.value
                  ? "border-brand-gold bg-brand-gold/5 text-brand-dark"
                  : "border-brand-cream-dark text-brand-dark/60 hover:border-brand-gold/40"
              }`}
            >
              {pf.label}
            </button>
          ))}
        </div>

        {priceFormat === "fixed" && (
          <div className="mt-3">
            <input
              type="number"
              step={10000}
              value={fixedPrice}
              onChange={(e) => setFixedPrice(Number(e.target.value))}
              placeholder="Сумма в рублях"
              className="w-full p-3 border border-brand-cream-dark rounded-xl text-brand-dark"
            />
          </div>
        )}
      </div>

      {/* 7. Имя клиента */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Имя клиента / компания
        </label>
        <input
          type="text"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          placeholder="Например: Анна и Дмитрий"
          className="w-full p-3 border border-brand-cream-dark rounded-xl text-brand-dark placeholder:text-brand-dark/30"
        />
      </div>

      {/* 8. Комментарий менеджера */}
      <div>
        <label className="block text-sm font-medium text-brand-dark/60 mb-3 uppercase tracking-wider">
          Комментарий менеджера
          <span className="text-brand-dark/30 ml-2 normal-case">(необязательно)</span>
        </label>
        <textarea
          value={managerComment}
          onChange={(e) => setManagerComment(e.target.value)}
          placeholder="Добавьте личное сообщение для клиента..."
          rows={3}
          className="w-full p-3 border border-brand-cream-dark rounded-xl text-brand-dark placeholder:text-brand-dark/30 resize-none"
        />
      </div>

      {/* Кнопка генерации */}
      <button
        onClick={handleGenerate}
        className="w-full btn-primary text-lg py-5 rounded-xl"
      >
        Сгенерировать презентацию
      </button>
    </div>
  );
}
