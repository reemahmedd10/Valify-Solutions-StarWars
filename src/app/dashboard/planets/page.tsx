import { getPlanets, Planet } from '@/lib/swapi';

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
        {data.results.map((planet: Planet) => (
          <div
            key={planet.name}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sw-dark to-sw-gray border border-sw-yellow/20 flex items-center justify-center text-3xl">
                🪐
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1">{planet.name}</h3>
              <p className="text-sm text-gray-500 mb-3 capitalize">{planet.terrain}</p>
              
              <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                <div className="bg-sw-dark/50 rounded p-2 text-center">
                  <p className="text-gray-500">Climate</p>
                  <p className="text-white capitalize truncate">{planet.climate}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2 text-center">
                  <p className="text-gray-500">Diameter</p>
                  <p className="text-white">{planet.diameter}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2 text-center">
                  <p className="text-gray-500">Gravity</p>
                  <p className="text-white truncate">{planet.gravity}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-sw-yellow/10">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Population</span>
                  <span className="text-white">
                    {planet.population === 'unknown' ? 'Unknown' : Number(planet.population).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
