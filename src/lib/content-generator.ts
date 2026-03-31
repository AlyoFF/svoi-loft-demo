import { Loft, EventType, PresentationConfig } from "@/data/types";
import { getEventType } from "@/data/event-types";

export function generateHeroTitle(config: PresentationConfig, loft: Loft): string {
  const eventConfig = getEventType(config.e);
  if (!eventConfig) return `Мероприятие в ${loft.name}`;
  return eventConfig.heroTitle(loft.name, config.g);
}

export function generateHeroSubtitle(config: PresentationConfig): string {
  const eventConfig = getEventType(config.e);
  return eventConfig?.heroSubtitle || "Пространство для вашего мероприятия";
}

export function generateDescription(config: PresentationConfig, loft: Loft): string {
  const eventConfig = getEventType(config.e);
  return eventConfig?.description(loft.name) || loft.description;
}

export function generateGreeting(config: PresentationConfig): string | null {
  if (!config.c) return null;

  const greetings: Record<EventType, string> = {
    wedding: `Дорогие ${config.c},`,
    corporate: `Уважаемый(-ая) ${config.c},`,
    birthday: `Дорогой(-ая) ${config.c},`,
    party: `${config.c},`,
    photoshoot: `${config.c},`,
    other: `${config.c},`,
  };

  return greetings[config.e] || `${config.c},`;
}

export function generateCtaTitle(eventType: EventType): string {
  const titles: Record<EventType, string> = {
    wedding: "Готовы обсудить детали вашей свадьбы?",
    corporate: "Готовы организовать незабываемый корпоратив?",
    birthday: "Готовы создать праздник мечты?",
    party: "Готовы к лучшей вечеринке?",
    photoshoot: "Готовы забронировать локацию?",
    other: "Готовы обсудить детали?",
  };
  return titles[eventType] || titles.other;
}

export function generateCtaSubtitle(eventType: EventType): string {
  const subtitles: Record<EventType, string> = {
    wedding: "Подберём оптимальный формат под ваш бюджет и пожелания. Закрепим удобную дату.",
    corporate: "Обсудим формат, подберём оптимальное решение и закрепим дату.",
    birthday: "Поможем организовать праздник от и до. Свяжитесь с нами для расчёта.",
    party: "Обсудим формат и подберём лучшее решение. Закрепим дату.",
    photoshoot: "Обсудим вашу концепцию и подберём оптимальное время.",
    other: "Подберём оптимальный формат под вашу задачу и бюджет.",
  };
  return subtitles[eventType] || subtitles.other;
}
