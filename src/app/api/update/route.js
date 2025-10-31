import { fetchCharacters } from "@/api/characters";
import { setCachedCharacters } from "@/api/charactersCache";

export async function GET() {
  try {
    const data = await fetchCharacters({ page: "1" });
    setCachedCharacters(data.results || []);
    return Response.json({ success: true, count: data.results?.length || 0 });
  } catch (err) {
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

// import { CharactersAPI } from "../character";

// // Ми будемо зберігати кеш Rick & Morty персонажів у пам'яті
// let cache = {
//   timestamp: null,
//   characters: [],
// };

// export async function GET() {
//   try {
//     const data = await CharactersAPI.getAll({ page: 1 });
//     cache = {
//       timestamp: new Date().toISOString(),
//       characters: data.results || [],
//     };

//     console.log(
//       "🪄 Оновлено Rick & Morty персонажів:",
//       cache.characters.length
//     );

//     return Response.json({
//       success: true,
//       updatedAt: cache.timestamp,
//       count: cache.characters.length,
//     });
//   } catch (err) {
//     console.error("Помилка оновлення персонажів:", err);
//     return Response.json(
//       { success: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }

// export function getCachedCharacters() {
//   return cache.characters;
// }
