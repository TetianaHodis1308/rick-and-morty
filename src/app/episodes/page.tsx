import Link from "next/link";

type EpisodeType = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export default async function Episodes() {
  const res = await fetch("https://rickandmortyapi.com/api/episode");
  if (!res.ok) throw new Error("Episodes not found");
  const data = await res.json();
  const episodes: EpisodeType[] = data.results;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Episodes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{episode.name}</h2>
            <p className="text-sm text-gray-400 mb-1">
              <strong>Episode:</strong> {episode.episode}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <strong>Air Date:</strong> {episode.air_date}
            </p>
            <p className="text-sm text-gray-400">
              <strong>Characters:</strong> {episode.characters.length}
            </p>

            <Link
              href={`/episodes/${episode.id}`}
              className="text-indigo-400 hover:underline text-lg block mt-3"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
