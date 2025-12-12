'use client';

import { useState } from 'react';
import { Planet } from '@/lib/swapi';
import Modal from './Modal';

interface PlanetCardProps {
  planet: Planet;
}

export default function PlanetCard({ planet }: PlanetCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const formatPopulation = (pop: string) => {
    if (pop === 'unknown') return 'Unknown';
    return Number(pop).toLocaleString();
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)] cursor-pointer"
      >
        <div className="h-32 bg-gradient-to-br from-green-500/10 to-teal-500/10 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sw-dark to-sw-gray border border-sw-yellow/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            🪐
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{planet.name}</h3>
          <p className="text-sm text-gray-500 mb-3 capitalize truncate">{planet.terrain}</p>
          
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Climate</p>
              <p className="text-white capitalize truncate">{planet.climate}</p>
            </div>
            <div className="bg-sw-dark/50 rounded p-2">
              <p className="text-gray-500">Population</p>
              <p className="text-white truncate">{formatPopulation(planet.population)}</p>
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-sw-yellow/30 flex items-center justify-center text-5xl flex-shrink-0">
              🪐
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{planet.name}</h2>
              <p className="text-gray-400 capitalize">{planet.terrain}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Climate</p>
              <p className="text-lg text-white font-semibold capitalize">{planet.climate}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Gravity</p>
              <p className="text-lg text-white font-semibold">{planet.gravity}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Diameter</p>
              <p className="text-lg text-white font-semibold">{planet.diameter} <span className="text-sm text-gray-400">km</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Rotation Period</p>
              <p className="text-lg text-white font-semibold">{planet.rotation_period} <span className="text-sm text-gray-400">hrs</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Orbital Period</p>
              <p className="text-lg text-white font-semibold">{planet.orbital_period} <span className="text-sm text-gray-400">days</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Surface Water</p>
              <p className="text-lg text-white font-semibold">{planet.surface_water}%</p>
            </div>
          </div>

          <div className="bg-sw-gray/50 rounded-lg p-4 mb-6">
            <p className="text-xs text-gray-500 mb-1">Population</p>
            <p className="text-2xl text-sw-yellow font-bold">{formatPopulation(planet.population)}</p>
          </div>

          <div className="border-t border-sw-yellow/20 pt-4">
            <p className="text-xs text-gray-500">Planet ID</p>
            <p className="text-sm text-gray-400 font-mono">{planet.url.split('/').filter(Boolean).pop()}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}





