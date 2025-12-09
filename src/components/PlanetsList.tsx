'use client';

import { useState } from 'react';
import { Planet } from '@/lib/swapi';
import PlanetCard from './PlanetCard';
import SearchBar from './SearchBar';

interface PlanetsListProps {
  planets: Planet[];
  total: number;
}

export default function PlanetsList({ planets, total }: PlanetsListProps) {
  const [search, setSearch] = useState('');

  const filtered = planets.filter((planet) =>
    planet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🪐</span>
            Planets
          </h1>
          <p className="text-gray-400">
            Visit the diverse worlds across the galaxy, from desert planets to ice worlds.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filtered.length} of {total} planets
        </div>
      </div>

      <SearchBar 
        value={search} 
        onChange={setSearch} 
        placeholder="Search planets by name..." 
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((planet) => (
            <PlanetCard key={planet.url} planet={planet} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No planets found matching &quot;{search}&quot;</p>
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

