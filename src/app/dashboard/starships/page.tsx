export default function StarshipsPage() {
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-40 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,232,31,0.05),transparent_70%)]" />
              <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            
            <div className="p-4">
              <div className="h-5 w-3/4 bg-sw-dark/50 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-sw-dark/30 rounded animate-pulse mb-4" />
              
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="p-2 bg-sw-dark/30 rounded">
                  <div className="h-3 w-1/2 bg-sw-dark/50 rounded animate-pulse mb-1" />
                  <div className="h-4 w-3/4 bg-sw-dark/50 rounded animate-pulse" />
                </div>
                <div className="p-2 bg-sw-dark/30 rounded">
                  <div className="h-3 w-1/2 bg-sw-dark/50 rounded animate-pulse mb-1" />
                  <div className="h-4 w-3/4 bg-sw-dark/50 rounded animate-pulse" />
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
          <span>Starship data will be loaded from SWAPI</span>
        </div>
      </div>
    </div>
  );
}
