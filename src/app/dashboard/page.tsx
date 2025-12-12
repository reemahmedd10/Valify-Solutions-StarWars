import Link from 'next/link';
import { getCharacters, getStarships, getPlanets } from '@/lib/swapi';

export default async function DashboardPage() {
  const [charactersData, starshipsData, planetsData] = await Promise.all([
    getCharacters(),
    getStarships(),
    getPlanets(),
  ]);

  const stats = [
    { label: 'Characters', value: charactersData.count, icon: '👤', href: '/dashboard/characters', color: 'from-blue-500/20 to-blue-600/10' },
    { label: 'Starships', value: starshipsData.count, icon: '🚀', href: '/dashboard/starships', color: 'from-purple-500/20 to-purple-600/10' },
    { label: 'Planets', value: planetsData.count, icon: '🪐', href: '/dashboard/planets', color: 'from-green-500/20 to-green-600/10' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to the Galaxy
        </h1>
        <p className="text-gray-400">
          Explore the Star Wars universe. Select a category to begin your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="group relative overflow-hidden rounded-2xl border border-sw-yellow/20 bg-sw-gray/50 p-6 transition-all duration-300 hover:border-sw-yellow/40 hover:shadow-[0_0_30px_rgba(255,232,31,0.1)]"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            <div className="relative z-10">
              <span className="text-4xl">{stat.icon}</span>
              <div className="mt-4">
                <p className="text-3xl font-bold text-white">{stat.value.toLocaleString()}</p>
                <p className="text-gray-400 mt-1">{stat.label}</p>
              </div>
              <div className="mt-4 flex items-center text-sw-yellow text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Explore</span>
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-sw-yellow/20 bg-sw-gray/30 p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-sw-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Quick Navigation
          </h2>
          <div className="space-y-3">
            <Link href="/dashboard/characters" className="flex items-center gap-3 p-3 rounded-lg bg-sw-dark/50 hover:bg-sw-yellow/5 transition-colors border border-transparent hover:border-sw-yellow/20">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span>👤</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">View Characters</p>
                <p className="text-gray-500 text-xs">Heroes, villains & more</p>
              </div>
            </Link>
            <Link href="/dashboard/starships" className="flex items-center gap-3 p-3 rounded-lg bg-sw-dark/50 hover:bg-sw-yellow/5 transition-colors border border-transparent hover:border-sw-yellow/20">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <span>🚀</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">View Starships</p>
                <p className="text-gray-500 text-xs">Legendary vessels</p>
              </div>
            </Link>
            <Link href="/dashboard/planets" className="flex items-center gap-3 p-3 rounded-lg bg-sw-dark/50 hover:bg-sw-yellow/5 transition-colors border border-transparent hover:border-sw-yellow/20">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span>🪐</span>
              </div>
              <div>
                <p className="text-white text-sm font-medium">View Planets</p>
                <p className="text-gray-500 text-xs">Explore diverse worlds</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-sw-yellow/20 bg-sw-gray/30 p-6">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-sw-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            About SWAPI
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            The Star Wars API (SWAPI) is a free, open-source API providing all the Star Wars data you&apos;ve ever wanted. 
            This dashboard allows you to explore information about characters, starships, and planets from the Star Wars universe.
          </p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            <span>API Status: Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
