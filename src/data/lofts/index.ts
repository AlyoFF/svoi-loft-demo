import { Loft } from "../types";
import { svoyYauza } from "./svoy-yauza";
import { svoyHamovniki } from "./svoy-patriki";

export const lofts: Record<string, Loft> = {
  "svoy-yauza": svoyYauza,
  "svoy-hamovniki": svoyHamovniki,
};

export const loftList = Object.values(lofts);

export function getLoft(slug: string): Loft | undefined {
  return lofts[slug];
}
