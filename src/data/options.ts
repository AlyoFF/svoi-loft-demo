import { AdditionalOption } from "./types";

export const additionalOptions: AdditionalOption[] = [
  {
    slug: "drinks",
    name: "Напитки",
    price: 0,
    unit: "по запросу",
    description: "Барная карта под ваше мероприятие",
    icon: "🥂",
  },
  {
    slug: "catering",
    name: "Кейтеринг",
    price: 0,
    unit: "по запросу",
    description: "Банкетное меню от партнёра Corso Catering",
    icon: "🍽️",
  },
  {
    slug: "dj",
    name: "DJ",
    price: 30000,
    unit: "за мероприятие",
    description: "Профессиональный диджей с оборудованием",
    icon: "🎧",
  },
  {
    slug: "host",
    name: "Ведущий",
    price: 40000,
    unit: "за мероприятие",
    description: "Опытный ведущий для вашего события",
    icon: "🎤",
  },
  {
    slug: "decor",
    name: "Декор",
    price: 0,
    unit: "по запросу",
    description: "Оформление пространства под концепцию мероприятия",
    icon: "🌸",
  },
  {
    slug: "photographer",
    name: "Фотограф",
    price: 25000,
    unit: "за мероприятие",
    description: "Профессиональная фотосъёмка вашего события",
    icon: "📷",
  },
  {
    slug: "hookah",
    name: "Кальяны",
    price: 38500,
    unit: "5 шт. на 5 часов",
    description: "Безлимитные кальяны для ваших гостей",
    icon: "💨",
  },
  {
    slug: "extended",
    name: "Продление аренды",
    price: 30000,
    unit: "за час",
    description: "Продление аренды после 00:00",
    icon: "🕐",
  },
  {
    slug: "internet",
    name: "Скоростной интернет",
    price: 10000,
    unit: "за мероприятие",
    description: "100 Мбит/сек по кабелю",
    icon: "🌐",
  },
  {
    slug: "smoke",
    name: "Дым-машина",
    price: 10000,
    unit: "за мероприятие",
    description: "Настройка пожарных датчиков для работы дым-машины",
    icon: "🌫️",
  },
  {
    slug: "cleaning",
    name: "Сложный клининг",
    price: 20000,
    unit: "за мероприятие",
    description: "Усиленная уборка после бумажной дискотеки и т.п.",
    icon: "🧹",
  },
  {
    slug: "coatcheck",
    name: "Гардеробщик",
    price: 15000,
    unit: "за мероприятие",
    description: "Обслуживание гардероба на 400 человек",
    icon: "🧥",
  },
];

export function getOption(slug: string): AdditionalOption | undefined {
  return additionalOptions.find((o) => o.slug === slug);
}
