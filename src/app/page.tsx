import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-sw-yellow text-glow mb-4">
          STAR WARS
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light tracking-wider">
          DASHBOARD
        </p>
      </div>

      <div className="max-w-2xl text-center mb-12">
        <p className="text-gray-400 text-lg leading-relaxed">
          Explore the vast Star Wars universe. Discover information about your favorite 
          characters, epic films, iconic starships, and mysterious planets from a galaxy far, far away.
        </p>
      </div>

      <Link 
        href="/dashboard" 
        className="mt-12 px-8 py-3 bg-sw-yellow/10 border border-sw-yellow/30 rounded-lg text-sw-yellow font-medium hover:bg-sw-yellow/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.2)]"
      >
        Enter Dashboard →
      </Link>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>Powered by SWAPI - The Star Wars API</p>
      </footer>
    </main>
  );
}
