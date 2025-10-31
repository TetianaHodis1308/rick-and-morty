import { Character } from "@/app/characters/page";

let cache = {
  timestamp: null as string | null,
  characters: [] as Character[],
};

export function getCachedCharacters() {
  return cache.characters;
}

export function setCachedCharacters(chars: Character[]) {
  cache = {
    timestamp: new Date().toISOString(),
    characters: chars,
  };
}
