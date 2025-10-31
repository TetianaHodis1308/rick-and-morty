import { LocationDetails } from "@/types/LocationDetails";
import Link from "next/link";

// type LocationType = {
//   id: number;
//   name: string;
//   type: string;
//   dimension: string;
//   residents: string[];
//   url: string;
//   created: string;
// };

export default async function Locations() {
  const res = await fetch("https://rickandmortyapi.com/api/location");
  if (!res.ok) throw new Error(`Locations not found`);
  const data = await res.json();
  const locations: LocationDetails[] = data.results;

  return (
    <main className="flex-1 bg-gradient-to-b from-purple-950 via-indigo-900 to-purple-800 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Locations</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {locations.map((location) => (
          <Link
            key={location.id}
            href={`/locations/${location.id}`}
            className="bg-gray-800 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{location.name}</h2>
            <p className="text-sm text-gray-400 mb-1">
              <strong>Type:</strong> {location.type}
            </p>
            <p className="text-sm text-gray-400 mb-1">
              <strong>Dimension:</strong> {location.dimension}
            </p>
            <p className="text-sm text-gray-400 mb-3">
              <strong>Residents:</strong> {location.residents.length}
            </p>

            <p className="text-indigo-400 hover:underline text-lg block">
              View Details
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
