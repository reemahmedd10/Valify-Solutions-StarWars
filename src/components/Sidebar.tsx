'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: 'Characters',
    href: '/dashboard/characters',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Starships',
    href: '/dashboard/starships',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Planets',
    href: '/dashboard/planets',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-sw-dark/95 backdrop-blur-md border-r border-sw-yellow/20 z-50">
      <div className="p-6 border-b border-sw-yellow/20">
        <Link href="/" className="block">
          <h1 className="font-[var(--font-orbitron)] text-2xl font-bold text-sw-yellow text-glow">
            STAR WARS
          </h1>
          <p className="text-xs text-gray-500 tracking-[0.3em] mt-1">DASHBOARD</p>
        </Link>
      </div>

      <nav className="p-4 mt-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-4 px-3">
          Explore
        </p>
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'bg-sw-yellow/10 text-sw-yellow border border-sw-yellow/30 shadow-[0_0_15px_rgba(255,232,31,0.1)]' 
                      : 'text-gray-400 hover:text-sw-yellow hover:bg-sw-yellow/5 border border-transparent'
                    }
                  `}
                >
                  <span className={isActive ? 'text-sw-yellow' : ''}>{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 bg-sw-yellow rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sw-yellow/20">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-sw-yellow/30 to-sw-yellow/10 flex items-center justify-center">
            <svg className="w-4 h-4 text-sw-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Powered by</p>
            <p className="text-sm text-gray-300">SWAPI</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
