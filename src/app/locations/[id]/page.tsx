import Image from "next/image";
import Link from "next/link";
import React from "react";

type Character = {
  id: number;
  name: string;
  image: string;
};

type LocationDetails = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export default async function LocationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
  if (!res.ok) throw new Error(`Location with ID ${id} not found`);
  const location: LocationDetails = await res.json();

  const residentIdsArray = location.residents
    .map((url) => url.split("/").pop())
    .filter(Boolean) as string[];

  let residentsList: Character[] = [];

  if (residentIdsArray.length > 0) {
    const ids = residentIdsArray.join(",");
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${ids}`
    );
    const result = await response.json();
    residentsList = Array.isArray(result) ? result : [result];
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Type:</strong> {location.type}
        </p>
        <p className="text-lg text-gray-300 mb-2">
          <strong>Dimension:</strong> {location.dimension}
        </p>
        <p className="text-lg text-gray-300 mb-6">
          <strong>Residents:</strong> {residentsList.length}
        </p>

        <h2 className="text-2xl font-semibold mb-4">Residents</h2>
        {residentsList.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {residentsList.map((resident) => (
              <Link
                key={resident.id}
                href={`/characters/${resident.id}`}
                className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src={resident.image}
                  alt={resident.name}
                  width={300}
                  height={300}
                  className="w-full h-40 object-cover"
                  priority
                />
                <div className="p-2 text-center">
                  <p className="text-sm">{resident.name}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">No residents found.</p>
        )}
      </div>
    </main>
  );
}
