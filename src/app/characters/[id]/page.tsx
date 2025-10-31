import Image from "next/image";
import { Character } from "@/types/types";

// type Character = {
//   id: number;
//   name: string;
//   status: "Alive" | "Dead" | "unknown";
//   species: string;
//   type: string;
//   gender: "Female" | "Male" | "Genderless" | "unknown";
//   origin: {
//     name: string;
//     url: string;
//   };
//   location: {
//     name: string;
//     url: string;
//   };
//   image: string;
//   episode: string[];
//   url: string;
//   created: string;
// };

// type CharacterPageProps = {
//   params: Promise<{ id: string }>;
// };

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  if (!res.ok) throw new Error("Character not found");
  const character: Character = await res.json();

  const statusColor =
    character.status === "Alive"
      ? "text-green-400"
      : character.status === "Dead"
      ? "text-red-400"
      : "text-yellow-300";

  return (
    <main className="flex-1 bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 text-white px-6 py-10 flex justify-center items-center">
      <div className="bg-gray-900 rounded-lg shadow-xl p-8 max-w-2xl w-full border border-gray-700">
        <div className="flex flex-col items-center">
          <Image
            src={character.image}
            alt={character.name}
            width={300}
            height={300}
            className="rounded-lg shadow-md border border-gray-700"
            priority
          />

          <h1 className="text-4xl font-bold mt-6 mb-4 text-center text-white">
            {character.name}
          </h1>

          <p className={`text-lg mb-2 font-semibold ${statusColor}`}>
            Status: {character.status}
          </p>

          <div className="text-sm text-gray-300 space-y-1 text-center">
            <p>
              <span className="text-gray-400 font-medium">Species:</span>{" "}
              {character.species}
            </p>
            <p>
              <span className="text-gray-400 font-medium">Gender:</span>{" "}
              {character.gender}
            </p>
            <p>
              <span className="text-gray-400 font-medium">Origin:</span>{" "}
              {character.origin.name}
            </p>
            <p>
              <span className="text-gray-400 font-medium">Location:</span>{" "}
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
