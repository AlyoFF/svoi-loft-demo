import { Loft } from "../types";

export const svoyYauza: Loft = {
  slug: "svoy-yauza",
  name: "SVOY ЯУЗА",
  tagline: "Лофт-пространство с характером в самом сердце Москвы",
  description:
    "Сочетание старинной архитектуры и современного дизайна. Площадка создана для проведения мероприятий любого формата — от камерных вечеринок до масштабных свадеб и корпоративов.",
  address: "Москва, набережная Яузы",
  totalArea: 869,
  zones: [
    { name: "Welcome-зона", area: 265, description: "Мягкая мебель, 2 гримёрки" },
    { name: "Основной зал", area: 265, description: "Сцена, LED-экран, профессиональный звук и свет" },
    { name: "Веранда", area: 170, description: "Открытое пространство с видом" },
  ],
  capacity: {
    banquet: 220,
    cocktail: 400,
    theater: 200,
  },
  facilities: [
    "9 раздельных санузлов",
    "3 гримёрные комнаты",
    "Сцена 4x3 м",
    "LED-экран TenTech P2.6 4,5x2,5 м",
    "Профессиональный звук Turbosound 4 кВт",
    "Световое оборудование",
    "Гардероб на 400 человек",
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
            "Сцена 4x3 м, высота 40 см",
            "LED-экран TenTech P2.6 (1920x1080)",
          ],
        },
        {
          category: "Звук",
          items: [
            "Turbosound iP3000, 4 кВт",
            "2 микрофона Shure SLX SM58",
            "Пульт Midas MR18",
          ],
        },
        {
          category: "Свет",
          items: [
            "Mean Real 1925 — 4 шт.",
            "Mean Real 1915 — 2 шт.",
            "Пульт SGM Pilot 2000",
          ],
        },
        {
          category: "Welcome-зона",
          items: ["Мягкая мебель", "2 гримёрки", "Звук Electro Voice"],
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
        { months: [1, 2], label: "Январь — Февраль", weekday: 280000, weekend: 300000 },
        { months: [3, 4], label: "Март — Апрель", weekday: 300000, weekend: 350000 },
        { months: [5], label: "Май", weekday: 250000, weekend: 300000 },
        { months: [6], label: "Июнь", weekday: 300000, weekend: 350000 },
        { months: [7], label: "Июль", weekday: 250000, weekend: 300000 },
        { months: [8], label: "Август", weekday: 300000, weekend: 350000 },
        { months: [9, 10], label: "Сентябрь — Октябрь", weekday: 250000, weekend: 300000 },
        { months: [11], label: "Ноябрь", weekday: 300000, weekend: 350000 },
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
            "Сцена 4x3 м, высота 40 см",
            "LED-экран TenTech P2.6 (1920x1080)",
            "3 гримёрные комнаты",
          ],
        },
        {
          category: "Звук",
          items: [
            "Turbosound iP3000, 4 кВт",
            "2 микрофона Shure SLX SM58",
            "Пульт Midas MR18",
          ],
        },
        {
          category: "Свет (расширенный)",
          items: [
            "Mean Real 1925 — 12 шт.",
            "Mean Real Mini Beam 250 — 3 шт.",
            "Showtec Sunstrip — 4 шт.",
            "Пульт Avolites Quartz",
            "Хейзер Base Hazer Pro 1500",
          ],
        },
        {
          category: "Welcome-зона",
          items: [
            "Мягкая мебель",
            "Свет Mean Real 1915 — 8 шт.",
            "Звук Electro Voice",
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
        { months: [1, 2], label: "Январь — Февраль", weekday: 280000, weekend: 300000 },
        { months: [3, 4], label: "Март — Апрель", weekday: 320000, weekend: 350000 },
        { months: [5], label: "Май", weekday: 280000, weekend: 300000 },
        { months: [6], label: "Июнь", weekday: 320000, weekend: 350000 },
        { months: [7], label: "Июль", weekday: 280000, weekend: 300000 },
        { months: [8], label: "Август", weekday: 320000, weekend: 350000 },
        { months: [9, 10], label: "Сентябрь — Октябрь", weekday: 280000, weekend: 300000 },
        { months: [11], label: "Ноябрь", weekday: 320000, weekend: 350000 },
      ],
    },
  ],
  images: {
    hero: "/images/lofts/yauza-hero.jpg",
    gallery: [
      "/images/lofts/yauza-hall.jpg",
      "/images/lofts/yauza-welcome.jpg",
      "/images/lofts/yauza-veranda.jpg",
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
