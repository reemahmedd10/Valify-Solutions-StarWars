export default function CharactersPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[var(--font-orbitron)] text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">👤</span>
            Characters
          </h1>
          <p className="text-gray-400">
            Explore heroes, villains, and everyone in between from the Star Wars saga.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-sw-dark/50 border-2 border-sw-yellow/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            
            <div className="p-4">
              <div className="h-5 w-3/4 bg-sw-dark/50 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-sw-dark/30 rounded animate-pulse" />
              
              <div className="mt-4 pt-4 border-t border-sw-yellow/10">
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
          <span>Character data will be loaded from SWAPI</span>
        </div>
      </div>
    </div>
  );
}
