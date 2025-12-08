import { getCharacters } from '@/lib/swapi';
import CharacterCard from '@/components/CharacterCard';

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
        {data.results.map((character) => (
          <CharacterCard key={character.name} character={character} />
        ))}
      </div>
    </div>
  );
}
