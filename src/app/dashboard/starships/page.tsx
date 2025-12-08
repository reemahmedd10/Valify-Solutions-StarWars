import { getStarships, Starship } from '@/lib/swapi';

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
        {data.results.map((starship: Starship) => (
          <div
            key={starship.name}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,232,31,0.05),transparent_70%)]" />
              <span className="text-5xl">🚀</span>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1 truncate">{starship.name}</h3>
              <p className="text-sm text-gray-500 mb-3 truncate">{starship.model}</p>
              
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Class</p>
                  <p className="text-white capitalize truncate">{starship.starship_class}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Speed</p>
                  <p className="text-white">{starship.max_atmosphering_speed}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Crew</p>
                  <p className="text-white">{starship.crew}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Passengers</p>
                  <p className="text-white">{starship.passengers}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-sw-yellow/10">
                <p className="text-xs text-gray-500 truncate">
                  <span className="text-gray-400">Manufacturer:</span> {starship.manufacturer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
