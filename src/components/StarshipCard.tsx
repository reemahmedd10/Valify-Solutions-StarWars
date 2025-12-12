'use client';

import { useState } from 'react';
import { Starship } from '@/lib/swapi';
import Modal from './Modal';

interface StarshipCardProps {
  starship: Starship;
}

export default function StarshipCard({ starship }: StarshipCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)] cursor-pointer"
      >
        <div className="h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,232,31,0.05),transparent_70%)]" />
          <span className="text-5xl group-hover:scale-110 transition-transform">🚀</span>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1 truncate">{starship.name}</h3>
          <p className="text-sm text-gray-500 mb-3 truncate">{starship.model}</p>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Class</p>
              <p className="text-white capitalize truncate">{starship.starship_class}</p>
            </div>
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Crew</p>
              <p className="text-white">{starship.crew}</p>
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
          <div className="flex items-start gap-6 mb-6">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-sw-yellow/30 flex items-center justify-center text-5xl flex-shrink-0">
              🚀
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{starship.name}</h2>
              <p className="text-gray-400">{starship.model}</p>
              <p className="text-sm text-gray-500 mt-1 capitalize">{starship.starship_class}</p>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-2">Manufacturer</p>
            <p className="text-white">{starship.manufacturer}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Length</p>
              <p className="text-lg text-white font-semibold">{starship.length} <span className="text-sm text-gray-400">m</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Max Speed</p>
              <p className="text-lg text-white font-semibold">{starship.max_atmosphering_speed}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Hyperdrive</p>
              <p className="text-lg text-white font-semibold">{starship.hyperdrive_rating}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Crew</p>
              <p className="text-lg text-white font-semibold">{starship.crew}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Passengers</p>
              <p className="text-lg text-white font-semibold">{starship.passengers}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Cargo</p>
              <p className="text-lg text-white font-semibold truncate">{starship.cargo_capacity}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Cost</p>
              <p className="text-white">{starship.cost_in_credits === 'unknown' ? 'Unknown' : `${Number(starship.cost_in_credits).toLocaleString()} credits`}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Consumables</p>
              <p className="text-white">{starship.consumables}</p>
            </div>
          </div>

          <div className="border-t border-sw-yellow/20 pt-4">
            <p className="text-xs text-gray-500">Starship ID</p>
            <p className="text-sm text-gray-400 font-mono">{starship.url.split('/').filter(Boolean).pop()}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}





