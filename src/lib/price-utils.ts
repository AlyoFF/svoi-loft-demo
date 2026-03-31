import { Loft, PriceFormat } from "@/data/types";

// Форматирование числа как цены: 250 000 ₽
export function formatRubles(amount: number): string {
  return amount.toLocaleString("ru-RU") + " ₽";
}

// Получить ценовой диапазон для текущего месяца
export function getCurrentPriceRange(
  loft: Loft,
  packageSlug: string
): { weekday: number; weekend: number } | null {
  const pkg = loft.packages.find((p) => p.slug === packageSlug);
  if (!pkg) return null;

  const currentMonth = new Date().getMonth() + 1;
  const season = pkg.pricing.find((s) => s.months.includes(currentMonth));
  if (!season) {
    // Если нет данных на текущий месяц, берём последний доступный
    const last = pkg.pricing[pkg.pricing.length - 1];
    return last ? { weekday: last.weekday, weekend: last.weekend } : null;
  }

  return { weekday: season.weekday, weekend: season.weekend };
}

// Форматирование цены по выбранному формату
export function formatPrice(
  format: PriceFormat,
  fixedPrice: number | undefined,
  priceRange: { weekday: number; weekend: number } | null
): string {
  if (format === "fixed" && fixedPrice) {
    return formatRubles(fixedPrice);
  }

  if (!priceRange) return "по запросу";

  if (format === "range") {
    if (priceRange.weekday === priceRange.weekend) {
      return formatRubles(priceRange.weekday);
    }
    return `${formatRubles(priceRange.weekday)} — ${formatRubles(priceRange.weekend)}`;
  }

  if (format === "from") {
    return `от ${formatRubles(priceRange.weekday)}`;
  }

  return formatRubles(priceRange.weekday);
}

// Подсчёт стоимости доп. опций
export function calculateOptionsTotal(
  selectedSlugs: string[],
  options: { slug: string; price: number }[]
): number {
  return selectedSlugs.reduce((sum, slug) => {
    const opt = options.find((o) => o.slug === slug);
    return sum + (opt?.price || 0);
  }, 0);
}
