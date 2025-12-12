'use client';

import { useState } from 'react';
import { Film } from '@/lib/swapi';
import Modal from './Modal';

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)] cursor-pointer"
      >
        <div className="h-40 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,232,31,0.05),transparent_70%)]" />
          <div className="text-center">
            <div className="text-6xl font-bold text-sw-yellow/30 group-hover:text-sw-yellow/50 transition-colors">
              {film.episode_id}
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-sw-yellow font-semibold">EPISODE {film.episode_id}</span>
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">{film.title}</h3>
          <p className="text-sm text-gray-500 mb-3">{film.release_date}</p>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Director</p>
              <p className="text-white truncate">{film.director}</p>
            </div>
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Release</p>
              <p className="text-white">{new Date(film.release_date).getFullYear()}</p>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-sw-yellow/10 flex justify-between items-center">
            <span className="text-xs text-gray-500">Click for details</span>
            <span className="text-sw-yellow text-xs opacity-0 group-hover:opacity-100 transition-opacity">View →</span>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="p-6">
          <div className="mb-6">
            <div className="inline-block px-3 py-1 bg-sw-yellow/10 border border-sw-yellow/30 rounded-full text-sw-yellow text-sm font-semibold mb-3">
              EPISODE {film.episode_id}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{film.title}</h2>
            <p className="text-gray-400">Released {new Date(film.release_date).toLocaleDateString()}</p>
          </div>

          <div className="bg-sw-gray/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-2">OPENING CRAWL</p>
            <p className="text-sm text-gray-300 leading-relaxed italic">
              {film.opening_crawl}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Director</p>
              <p className="text-lg text-white font-semibold">{film.director}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Producer</p>
              <p className="text-white text-sm">{film.producer}</p>
            </div>
          </div>

          <div className="border-t border-sw-yellow/20 pt-4">
            <p className="text-xs text-gray-500">Film ID</p>
            <p className="text-sm text-gray-400 font-mono">{film.url.split('/').filter(Boolean).pop()}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

