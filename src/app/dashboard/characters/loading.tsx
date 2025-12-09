export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">👤</span>
            Characters
          </h1>
          <p className="text-gray-400">Loading characters from the galaxy...</p>
        </div>
      </div>

      <div className="h-12 bg-sw-dark/80 border border-sw-yellow/20 rounded-xl animate-pulse" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden"
          >
            <div className="h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-sw-dark/50 animate-pulse" />
            </div>
            <div className="p-4">
              <div className="h-5 w-3/4 bg-sw-dark/50 rounded animate-pulse mb-2" />
              <div className="h-4 w-1/2 bg-sw-dark/30 rounded animate-pulse mb-3" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-12 bg-sw-dark/50 rounded animate-pulse" />
                <div className="h-12 bg-sw-dark/50 rounded animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


