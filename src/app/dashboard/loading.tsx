export default function Loading() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to the Galaxy
        </h1>
        <p className="text-gray-400">
          Loading dashboard data...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-sw-yellow/20 bg-sw-gray/50 p-6 animate-pulse"
          >
            <div className="w-12 h-12 bg-sw-dark/50 rounded-full mb-4" />
            <div className="h-10 w-24 bg-sw-dark/50 rounded mb-2" />
            <div className="h-4 w-32 bg-sw-dark/30 rounded" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-sw-yellow/20 bg-sw-gray/30 p-6 animate-pulse">
          <div className="h-6 w-48 bg-sw-dark/50 rounded mb-4" />
          <div className="space-y-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-20 bg-sw-dark/50 rounded" />
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-sw-yellow/20 bg-sw-gray/30 p-6 animate-pulse">
          <div className="h-6 w-48 bg-sw-dark/50 rounded mb-4" />
          <div className="h-32 bg-sw-dark/50 rounded" />
        </div>
      </div>
    </div>
  );
}

