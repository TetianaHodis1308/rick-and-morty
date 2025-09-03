export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 flex items-center justify-center text-white px-4 py-10">
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
      </div>
    </main>
  );
}
