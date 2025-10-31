import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1 bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 flex items-center justify-center text-white px-4 py-10">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-5xl font-semibold text-center max-w-3xl px-6 py-4 bg-white/5 backdrop-blur-md rounded-lg leading-snug shadow-md">
          Welcome to the story about{" "}
          <span className="text-violet-300">Rick</span> and{" "}
          <span className="text-indigo-300">Morty</span>
        </h1>
        <h3 className="text-lg font-medium text-center max-w-xl px-6 py-4 bg-white/5 backdrop-blur-md rounded-lg leading-snug shadow-md">
          Explore all the characters from the Rick and Morty universe. Search,
          filter and discover your favorite characters — from intergalactic
          scientists to multiverse aliens!
        </h3>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/characters"
            className="flex-1 bg-violet-600 hover:bg-violet-700 transition-colors px-3 py-4 rounded-md text-white text-xl font-semibold shadow text-center flex items-center justify-center
          "
          >
            View Characters
          </Link>
          <Link
            href="/locations"
            className="flex-1 bg-purple-700 hover:bg-purple-800 transition-colors px-3 py-4 rounded-md text-white text-xl font-semibold shadow flex items-center justify-center"
          >
            View Locations
          </Link>
          <Link
            href="/episodes"
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 transition-colors px-3 py-4 rounded-md text-white text-xl font-semibold shadow flex items-center justify-center"
          >
            View Episodes
          </Link>
        </div>
      </div>
    </main>
  );
}
