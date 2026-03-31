import { Loft } from "../types";

export const svoyHamovniki: Loft = {
  slug: "svoy-hamovniki",
  name: "SVOY ХАМОВНИКИ",
  tagline: "Атмосфера простора и свободы для исключительных событий",
  description:
    "SVOY HAMOVNIKI — это пространство, где каждая деталь продумана до мелочей для создания неповторимой атмосферы роскоши и комфорта. Изящная лестница с архитектурной подсветкой станет эффектным акцентом вашего мероприятия. Это больше, чем место встречи — это платформа для создания исключительных событий, которые запомнятся навсегда.",
  address: "Москва, Хамовники",
  totalArea: 700,
  zones: [
    { name: "Основной зал", area: 500, description: "Сцена, LED-экран, профессиональный звук и свет" },
    { name: "Летняя веранда", area: 120, description: "Мебель и декор (аренда оплачивается дополнительно)" },
    { name: "Гримёрные", area: 80, description: "2 гримёрные комнаты" },
  ],
  capacity: {
    banquet: 250,
    cocktail: 450,
    theater: 200,
  },
  facilities: [
    "2 гримёрные комнаты",
    "Сцена Alustage 4x3 м",
    "Светодиодный экран 3,5x2 м",
    "Звук Turbosound iP3000 4 кВт x2",
    "Профессиональный свет",
    "Летняя веранда",
    "Архитектурная подсветка лестницы",
  ],
  packages: [
    {
      slug: "business",
      name: "Бизнес",
      included: [
        {
          category: "Зал и оборудование",
          items: [
            "Основной зал с 6:00 до 00:00",
            "Сцена Alustage 4x3, высота 40 см",
            "Светодиодный экран 3,5x2 м",
            "Мягкая мебель",
          ],
        },
        {
          category: "Звук",
          items: [
            "Turbosound iP3000, 4 кВт — 2 шт.",
            "Пульт Midas MR18",
            "Микрофоны Shure SLXD — 2 шт.",
          ],
        },
        {
          category: "Свет",
          items: [
            "Mean Real Wash Beam 1915 — 8 шт.",
            "Пульт SGM Pilot 3000",
            "Силовые линии 32А 21кВт — 5 шт.",
          ],
        },
        {
          category: "Персонал",
          items: [
            "Менеджер площадки",
            "Технический специалист (12 часов)",
            "Охранник",
          ],
        },
        {
          category: "Клининг",
          items: ["Базовый клининг до, во время и после мероприятия"],
        },
      ],
      pricing: [
        { months: [1, 2], label: "Январь — Февраль", weekday: 375000, weekend: 500000 },
        { months: [3, 4], label: "Март — Апрель", weekday: 400000, weekend: 550000 },
        { months: [5], label: "Май", weekday: 375000, weekend: 500000 },
        { months: [6], label: "Июнь", weekday: 400000, weekend: 550000 },
        { months: [7], label: "Июль", weekday: 375000, weekend: 500000 },
        { months: [8], label: "Август", weekday: 400000, weekend: 550000 },
        { months: [9], label: "Сентябрь", weekday: 375000, weekend: 500000 },
        { months: [10, 11], label: "Октябрь — Ноябрь", weekday: 400000, weekend: 550000 },
      ],
    },
    {
      slug: "premium",
      name: "Премиум",
      included: [
        {
          category: "Зал и оборудование",
          items: [
            "Основной зал с 6:00 до 00:00",
            "Сцена Alustage 4x3, высота 40 см",
            "Светодиодный экран 3,5x2 м",
            "Мебель и декор летней веранды",
            "2 гримёрные комнаты",
          ],
        },
        {
          category: "Звук",
          items: [
            "Turbosound iP3000, 4 кВт — 2 шт.",
            "Пульт Midas MR18",
            "Микрофоны Shure SLXD — 2 шт.",
          ],
        },
        {
          category: "Свет (расширенный)",
          items: [
            "Mean Real Macaura 1915 wash — 12 шт.",
            "Mean Real Macaura 1925 wash — 8 шт.",
            "Mean Real Sharpy Beam 250 — 4 шт.",
            "LED Bar 6x18 RGBWAU — 8 шт. (архитектурная подсветка)",
          ],
        },
        {
          category: "Персонал",
          items: [
            "Менеджер площадки",
            "Технический специалист (12 часов)",
            "Охранник",
            "Виджей",
            "Художник по свету",
            "Гардеробщик",
          ],
        },
        {
          category: "Клининг",
          items: ["Базовый клининг до, во время и после мероприятия"],
        },
      ],
      pricing: [
        { months: [1, 2], label: "Январь — Февраль", weekday: 450000, weekend: 550000 },
        { months: [3, 4], label: "Март — Апрель", weekday: 475000, weekend: 550000 },
        { months: [5], label: "Май", weekday: 450000, weekend: 550000 },
        { months: [6], label: "Июнь", weekday: 475000, weekend: 550000 },
        { months: [7], label: "Июль", weekday: 450000, weekend: 500000 },
        { months: [8], label: "Август", weekday: 450000, weekend: 550000 },
        { months: [9], label: "Сентябрь", weekday: 450000, weekend: 500000 },
        { months: [10, 11], label: "Октябрь — Ноябрь", weekday: 475000, weekend: 550000 },
      ],
    },
  ],
  images: {
    hero: "/images/lofts/hamovniki-hero.jpg",
    gallery: [
      "/images/lofts/hamovniki-hall.jpg",
      "/images/lofts/hamovniki-veranda.jpg",
      "/images/lofts/hamovniki-stairs.jpg",
    ],
  },
  social: {
    vk: "@SVOYTEAM_MSK",
    instagram: "@SVOY.TEAM",
  },
  insuranceDeposit: 70000,
  bankTransferSurcharge: 0.15,
  phone: "+7 (999) 123-45-67",
  whatsapp: "79991234567",
};
