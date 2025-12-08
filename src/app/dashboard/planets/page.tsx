import { getPlanets } from '@/lib/swapi';
import PlanetCard from '@/components/PlanetCard';

export default async function PlanetsPage() {
  const data = await getPlanets();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[var(--font-orbitron)] text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🪐</span>
            Planets
          </h1>
          <p className="text-gray-400">
            Visit the diverse worlds across the galaxy, from desert planets to ice worlds.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {data.results.length} of {data.count} planets
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.results.map((planet) => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
    </div>
  );
}
