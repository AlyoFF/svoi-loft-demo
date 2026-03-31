import { PresentationConfig } from "@/data/types";

export function encodeConfig(config: PresentationConfig): string {
  const json = JSON.stringify(config);
  if (typeof window !== "undefined") {
    return btoa(unescape(encodeURIComponent(json)));
  }
  return Buffer.from(json, "utf-8").toString("base64");
}

export function decodeConfig(encoded: string): PresentationConfig | null {
  try {
    let json: string;
    if (typeof window !== "undefined") {
      json = decodeURIComponent(escape(atob(encoded)));
    } else {
      json = Buffer.from(encoded, "base64").toString("utf-8");
    }
    return JSON.parse(json) as PresentationConfig;
  } catch {
    return null;
  }
}
