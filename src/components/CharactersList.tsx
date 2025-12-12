'use client';

import { useState } from 'react';
import { Character } from '@/lib/swapi';
import CharacterCard from './CharacterCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

interface CharactersListProps {
  characters: Character[];
  total: number;
  currentPage: number;
}

export default function CharactersList({ characters, total, currentPage }: CharactersListProps) {
  const [search, setSearch] = useState('');

  const filtered = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">👤</span>
            Characters
          </h1>
          <p className="text-gray-400">
            Explore heroes, villains, and everyone in between from the Star Wars saga.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filtered.length} of {total} characters
        </div>
      </div>

      <SearchBar 
        value={search} 
        onChange={setSearch} 
        placeholder="Search characters by name..." 
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((character) => (
            <CharacterCard key={character.url} character={character} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No characters found matching &quot;{search}&quot;</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-4 text-sw-yellow hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      {!search && (
        <Pagination 
          currentPage={currentPage}
          totalCount={total}
          itemsPerPage={10}
          basePath="/dashboard/characters"
        />
      )}
    </div>
  );
}

