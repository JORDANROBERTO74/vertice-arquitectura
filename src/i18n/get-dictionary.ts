import { en, type Dictionary } from "./dictionaries/en";
import { es } from "./dictionaries/es";
import type { Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
