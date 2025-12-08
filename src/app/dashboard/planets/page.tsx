export default function PlanetsPage() {
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-40 bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sw-dark to-sw-gray border border-sw-yellow/20 flex items-center justify-center">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            
            <div className="p-4">
              <div className="h-5 w-3/4 bg-sw-dark/50 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-sw-dark/30 rounded animate-pulse mb-4" />
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center p-2 bg-sw-dark/30 rounded">
                  <div className="h-3 w-full bg-sw-dark/50 rounded animate-pulse mb-1 mx-auto" />
                  <div className="h-4 w-3/4 bg-sw-dark/50 rounded animate-pulse mx-auto" />
                </div>
                <div className="text-center p-2 bg-sw-dark/30 rounded">
                  <div className="h-3 w-full bg-sw-dark/50 rounded animate-pulse mb-1 mx-auto" />
                  <div className="h-4 w-3/4 bg-sw-dark/50 rounded animate-pulse mx-auto" />
                </div>
                <div className="text-center p-2 bg-sw-dark/30 rounded">
                  <div className="h-3 w-full bg-sw-dark/50 rounded animate-pulse mb-1 mx-auto" />
                  <div className="h-4 w-3/4 bg-sw-dark/50 rounded animate-pulse mx-auto" />
                </div>
              </div>
              
              <div className="pt-4 border-t border-sw-yellow/10">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Loading...</span>
                  <span className="text-sw-yellow opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sw-yellow/10 border border-sw-yellow/20 text-sw-yellow text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Planet data will be loaded from SWAPI</span>
        </div>
      </div>
    </div>
  );
}
