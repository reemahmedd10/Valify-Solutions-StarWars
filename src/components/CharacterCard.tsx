'use client';

import { useState } from 'react';
import { Character } from '@/lib/swapi';
import Modal from './Modal';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="group rounded-xl border border-sw-yellow/20 bg-sw-gray/30 overflow-hidden hover:border-sw-yellow/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,232,31,0.1)] cursor-pointer"
      >
        <div className="h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-sw-dark/50 border-2 border-sw-yellow/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
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
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-sw-yellow/30 flex items-center justify-center text-5xl flex-shrink-0">
              {character.gender === 'male' ? '👨' : character.gender === 'female' ? '👩' : '👤'}
            </div>
            <div>
              <h2 className="font-[var(--font-orbitron)] text-2xl font-bold text-white mb-2">{character.name}</h2>
              <p className="text-gray-400">Born {character.birth_year}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Height</p>
              <p className="text-lg text-white font-semibold">{character.height} <span className="text-sm text-gray-400">cm</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Mass</p>
              <p className="text-lg text-white font-semibold">{character.mass} <span className="text-sm text-gray-400">kg</span></p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Gender</p>
              <p className="text-lg text-white font-semibold capitalize">{character.gender}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Hair Color</p>
              <p className="text-lg text-white font-semibold capitalize">{character.hair_color}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Eye Color</p>
              <p className="text-lg text-white font-semibold capitalize">{character.eye_color}</p>
            </div>
            <div className="bg-sw-gray/50 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-1">Skin Color</p>
              <p className="text-lg text-white font-semibold capitalize">{character.skin_color}</p>
            </div>
          </div>

          <div className="border-t border-sw-yellow/20 pt-4">
            <p className="text-xs text-gray-500">Character ID</p>
            <p className="text-sm text-gray-400 font-mono">{character.url.split('/').filter(Boolean).pop()}</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

