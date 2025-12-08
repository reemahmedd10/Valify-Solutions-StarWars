export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">

      <div className="text-center mb-12">
        <h1 className="font-[var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl font-bold text-sw-yellow text-glow mb-4">
          STAR WARS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light tracking-wider">
          DASHBOARD
        </p>
      </div>

      {/* Welcome Message */}
      <div className="max-w-2xl text-center mb-12">
        <p className="text-gray-400 text-lg leading-relaxed">
          Explore the vast Star Wars universe. Discover information about your favorite 
          characters, iconic starships, and mysterious planets from a galaxy far, far away.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        <div className="card-hover star-border bg-sw-gray/50 backdrop-blur-sm rounded-xl p-6 cursor-pointer">
          <div className="text-4xl mb-4">👤</div>
          <h2 className="text-xl font-semibold text-sw-yellow mb-2">Characters</h2>
          <p className="text-gray-400 text-sm">
            Explore heroes, villains, and everyone in between from the Star Wars saga.
          </p>
        </div>

        <div className="card-hover star-border bg-sw-gray/50 backdrop-blur-sm rounded-xl p-6 cursor-pointer">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-xl font-semibold text-sw-yellow mb-2">Starships</h2>
          <p className="text-gray-400 text-sm">
            Discover the legendary vessels that travel through hyperspace.
          </p>
        </div>

        <div className="card-hover star-border bg-sw-gray/50 backdrop-blur-sm rounded-xl p-6 cursor-pointer sm:col-span-2 lg:col-span-1">
          <div className="text-4xl mb-4">🪐</div>
          <h2 className="text-xl font-semibold text-sw-yellow mb-2">Planets</h2>
          <p className="text-gray-400 text-sm">
            Visit the diverse worlds across the galaxy, from desert planets to ice worlds.
          </p>
        </div>
      </div>

      
      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Powered by SWAPI - The Star Wars API</p>
      </footer>
    </main>
  );
}

