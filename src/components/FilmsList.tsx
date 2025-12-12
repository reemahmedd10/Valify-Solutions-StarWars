'use client';

import { useState } from 'react';
import { Film } from '@/lib/swapi';
import FilmCard from './FilmCard';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

interface FilmsListProps {
  films: Film[];
  total: number;
  currentPage: number;
}

export default function FilmsList({ films, total, currentPage }: FilmsListProps) {
  const [search, setSearch] = useState('');

  const filtered = films.filter((film) =>
    film.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-4xl">🎬</span>
            Films
          </h1>
          <p className="text-gray-400">
            Explore the epic saga across all Star Wars films.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Showing {filtered.length} of {total} films
        </div>
      </div>

      <SearchBar 
        value={search} 
        onChange={setSearch} 
        placeholder="Search films by title..." 
      />

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((film) => (
            <FilmCard key={film.url} film={film} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">No films found matching &quot;{search}&quot;</p>
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
          basePath="/dashboard/films"
        />
      )}
    </div>
  );
}

