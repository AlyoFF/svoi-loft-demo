import { Loft } from "../types";

export const svoyPatriki: Loft = {
  slug: "svoy-patriki",
  name: "СВОЙ ПАТРИКИ",
  tagline: "Камерный лофт в центре Москвы для особенных событий",
  description:
    "Уютное пространство с панорамными окнами и террасой на крыше. Идеально подходит для камерных мероприятий, дней рождения, фотосъёмок и небольших корпоративов.",
  address: "Москва, Патриаршие пруды",
  totalArea: 350,
  zones: [
    { name: "Основной зал", area: 200, description: "Панорамные окна, дизайнерский интерьер" },
    { name: "Терраса", area: 80, description: "Открытая терраса с видом на город" },
    { name: "Лаунж-зона", area: 70, description: "Мягкая мебель, бар" },
  ],
  capacity: {
    banquet: 80,
    cocktail: 150,
    theater: 100,
  },
  facilities: [
    "4 санузла",
    "1 гримёрная",
    "Проектор и экран",
    "Звуковая система JBL",
    "Базовый свет",
    "Терраса с видом",
  ],
  packages: [
    {
      slug: "business",
      name: "Бизнес",
      included: [
        {
          category: "Зал и оборудование",
          items: [
            "Основной зал с 10:00 до 23:00",
            "Проектор и экран",
            "Базовый свет",
          ],
        },
        {
          category: "Звук",
          items: [
            "JBL PRX 815 — 2 шт.",
            "Микрофон — 1 шт.",
          ],
        },
        {
          category: "Персонал",
          items: [
            "Менеджер площадки",
            "Охранник",
          ],
        },
        {
          category: "Клининг",
          items: ["Базовый клининг"],
        },
      ],
      pricing: [
        { months: [1, 2, 3], label: "Январь — Март", weekday: 150000, weekend: 180000 },
        { months: [4, 5, 6], label: "Апрель — Июнь", weekday: 170000, weekend: 200000 },
        { months: [7, 8, 9], label: "Июль — Сентябрь", weekday: 180000, weekend: 220000 },
        { months: [10, 11], label: "Октябрь — Ноябрь", weekday: 170000, weekend: 200000 },
      ],
    },
    {
      slug: "premium",
      name: "Премиум",
      included: [
        {
          category: "Зал и оборудование",
          items: [
            "Основной зал с 10:00 до 23:00",
            "Терраса",
            "Лаунж-зона",
            "Проектор и экран",
            "Расширенный свет",
          ],
        },
        {
          category: "Звук",
          items: [
            "JBL PRX 815 — 2 шт.",
            "Микрофон — 2 шт.",
            "Диджейский пульт",
          ],
        },
        {
          category: "Персонал",
          items: [
            "Менеджер площадки",
            "Техник",
            "Охранник",
            "Гардеробщик",
          ],
        },
        {
          category: "Клининг",
          items: ["Полный клининг"],
        },
      ],
      pricing: [
        { months: [1, 2, 3], label: "Январь — Март", weekday: 190000, weekend: 230000 },
        { months: [4, 5, 6], label: "Апрель — Июнь", weekday: 220000, weekend: 260000 },
        { months: [7, 8, 9], label: "Июль — Сентябрь", weekday: 230000, weekend: 280000 },
        { months: [10, 11], label: "Октябрь — Ноябрь", weekday: 220000, weekend: 260000 },
      ],
    },
  ],
  images: {
    hero: "/images/lofts/patriki-hero.jpg",
    gallery: [
      "/images/lofts/patriki-hall.jpg",
      "/images/lofts/patriki-terrace.jpg",
      "/images/lofts/patriki-lounge.jpg",
    ],
  },
  social: {
    vk: "@SVOYTEAM_MSK",
    instagram: "@SVOY.TEAM",
  },
  insuranceDeposit: 50000,
  bankTransferSurcharge: 0.15,
  phone: "+7 (999) 123-45-67",
  whatsapp: "79991234567",
};
