import { getCharacters, Character } from '@/lib/swapi';

export default async function CharactersPage() {
  const data = await getCharacters();

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
        <div className="text-sm text-gray-500">
          Showing {data.results.length} of {data.count} characters
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.results.map((character: Character) => (
          <div
            key={character.name}
            className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)]"
          >
            <div className="h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-sw-dark/50 border-2 border-sw-yellow/20 flex items-center justify-center text-3xl">
                {character.gender === 'male' ? '👨' : character.gender === 'female' ? '👩' : '👤'}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-1 truncate">{character.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{character.birth_year}</p>
              
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Height</p>
                  <p className="text-white">{character.height} cm</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Mass</p>
                  <p className="text-white">{character.mass} kg</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Hair</p>
                  <p className="text-white capitalize">{character.hair_color}</p>
                </div>
                <div className="bg-sw-dark/50 rounded p-2">
                  <p className="text-gray-500">Eyes</p>
                  <p className="text-white capitalize">{character.eye_color}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
