export interface Loft {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  address: string;
  totalArea: number;
  zones: Zone[];
  capacity: CapacityConfig;
  facilities: string[];
  packages: Package[];
  images: LoftImages;
  social: SocialLinks;
  insuranceDeposit: number;
  bankTransferSurcharge: number;
  phone: string;
  whatsapp: string;
}

export interface Zone {
  name: string;
  area: number;
  description?: string;
}

export interface CapacityConfig {
  banquet: number;
  cocktail: number;
  theater: number;
}

export interface Package {
  slug: string;
  name: string;
  included: IncludedItem[];
  pricing: SeasonalPricing[];
}

export interface IncludedItem {
  category: string;
  items: string[];
}

export interface SeasonalPricing {
  months: number[];
  label: string;
  weekday: number;  // Вс-Ср
  weekend: number;  // Чт-Сб
}

export interface LoftImages {
  hero: string;
  gallery: string[];
}

export interface SocialLinks {
  vk?: string;
  instagram?: string;
  telegram?: string;
}

// Типы мероприятий
export type EventType =
  | "wedding"
  | "corporate"
  | "birthday"
  | "party"
  | "photoshoot"
  | "other";

export interface EventTypeConfig {
  slug: EventType;
  label: string;
  icon: string;
  heroTitle: (loftName: string, guestCount: number) => string;
  heroSubtitle: string;
  description: (loftName: string) => string;
  suggestedOptions: string[];
}

// Дополнительные опции
export interface AdditionalOption {
  slug: string;
  name: string;
  price: number;
  unit: string;
  description?: string;
  icon: string;
}

// Формат цены
export type PriceFormat = "fixed" | "range" | "from";

// Конфигурация презентации (то, что кодируется в URL)
export interface PresentationConfig {
  l: string;       // loftSlug
  e: EventType;    // eventType
  g: number;       // guestCount
  p: string;       // packageSlug
  o: string[];     // selectedOptions (slugs)
  f: PriceFormat;  // priceFormat
  fp?: number;     // fixedPrice (если формат = fixed)
  c: string;       // clientName
  m?: string;      // managerComment
}
