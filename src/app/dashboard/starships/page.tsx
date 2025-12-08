import { getStarships } from '@/lib/swapi';
import StarshipCard from '@/components/StarshipCard';

export default async function StarshipsPage() {
  const data = await getStarships();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[var(--font-orbitron)] text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            Starships
          </h1>
          <p className="text-gray-400">
            Discover the legendary vessels that travel through hyperspace.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {data.results.length} of {data.count} starships
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}
