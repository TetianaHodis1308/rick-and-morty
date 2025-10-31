import Image from "next/image";
import Link from "next/link";
import Forms from "@/components/Forms";
import Paginate from "@/components/Paginate";
import { fetchCharacters } from "@/api/characters";
import { getCachedCharacters } from "@/api/charactersCache";

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export default async function Characters({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string> | undefined>;
}) {
  const params = await searchParams; // <- обов’язково await
  const { page = "1", name = "", status = "", gender = "" } = params || {};

  // Тепер можна без проблем використовувати page, name, status, gender
  // let characters = getCachedCharacters();

  // if (!characters.length) {
  //   const data = await fetchCharacters({ page, name, status, gender });
  //   characters = data.results || [];
  // }

  // const {
  //   page = "1",
  //   name = "",
  //   status = "",
  //   gender = "",
  // } = searchParams || {};

  const query = { page, name, status, gender };
  let characters: Character[] = getCachedCharacters();
  let countPages: number = 1;

  if (!characters.length) {
    const data = await fetchCharacters(query);
    characters = data.results || [];
    countPages = data.info?.pages;
  }

  // export default async function Characters({
  //   searchParams,
  // }: {
  //   searchParams: Promise<{ [key: string]: string | undefined }>;
  // }) {
  //   const {
  //   status = "",
  //   gender = "",
  //   name = "",
  //   page = "1",
  // } = await searchParams;

  // const query = new URLSearchParams();

  // if (status) query.set("status", status);
  // if (gender) query.set("gender", gender);
  // if (name) query.set("name", name);
  // query.set("page", page);

  // const apiUrl = `https://rickandmortyapi.com/api/character/?${query.toString()}`;

  // const res = await fetch(apiUrl);
  // const data = await res.json();

  // const characters: Character[] = data.results || [];
  // const countPages: number = data.info?.pages || 1;

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800  text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Rick and Morty Characters!
      </h1>

      <Forms status={status} gender={gender} name={name} />

      {characters.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
            {characters.map((char) => (
              <div
                key={char.id}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={char.image}
                  alt={char.name}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover"
                  priority
                />
                <div className="p-4">
                  <Link
                    href={`/characters/${char.id}`}
                    className="text-xl font-semibold mb-2 hover:underline"
                  >
                    {char.name}
                  </Link>
                  <p className="text-sm text-gray-300">
                    Status:{" "}
                    <span
                      className={
                        char.status === "Alive"
                          ? "text-green-400"
                          : char.status === "Dead"
                          ? "text-red-400"
                          : "text-yellow-300"
                      }
                    >
                      {char.status}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Species: {char.species}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Gender: {char.gender}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Paginate countPages={countPages} />
        </div>
      ) : (
        <p className="text-center text-gray-400">No characters found.</p>
      )}
    </main>
  );
}
