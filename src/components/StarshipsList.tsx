'use client';

import { useState } from 'react';
import { Starship } from '@/lib/swapi';
import StarshipCard from './StarshipCard';
import SearchBar from './SearchBar';

interface StarshipsListProps {
  starships: Starship[];
  total: number;
}

export default function StarshipsList({ starships, total }: StarshipsListProps) {
  const [search, setSearch] = useState('');

  const filtered = starships.filter((starship) =>
    starship.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-[var(--font-orbitron)] text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🚀</span>
            Starships
          </h1>
          <p className="text-gray-400">
            Discover the legendary vessels that travel through hyperspace.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filtered.length} of {total} starships
        </div>
      </div>

      <SearchBar 
        value={search} 
        onChange={setSearch} 
        placeholder="Search starships by name..." 
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((starship) => (
            <StarshipCard key={starship.name} starship={starship} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No starships found matching &quot;{search}&quot;</p>
          <button 
            onClick={() => setSearch('')}
            className="mt-4 text-sw-yellow hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}

