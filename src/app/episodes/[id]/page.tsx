import Image from "next/image";
import Link from "next/link";

type Character = {
  id: number;
  name: string;
  image: string;
};

type EpisodeDetails = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export default async function EpisodePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  if (!res.ok) throw new Error("Episode not found");
  const episode: EpisodeDetails = await res.json();

  const characterIds = episode.characters
    .map((url) => url.split("/").pop())
    .join(",");
  const charRes = await fetch(
    `https://rickandmortyapi.com/api/character/${characterIds}`
  );
  const characters: Character[] = await charRes.json();
  const characterList = Array.isArray(characters) ? characters : [characters];

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{episode.name}</h1>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Episode:</strong> {episode.episode}
        </p>
        <p className="text-lg text-gray-300 mb-6">
          <strong>Air Date:</strong> {episode.air_date}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Characters</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {characterList.map((character) => (
            <Link
              key={character.id}
              href={`/characters/${character.id}`}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
            >
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                className="w-full h-40 object-cover"
                priority
              />
              <div className="p-2 text-center">
                <p className="text-sm">{character.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
