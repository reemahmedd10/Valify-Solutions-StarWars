'use client';

import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  itemsPerPage: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalCount, itemsPerPage, basePath }: PaginationProps) {
  const totalPages = Math.ceil(totalCount / itemsPerPage);
  
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) => `${basePath}?page=${page}`;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...');
    }
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Link
        href={getPageUrl(Math.max(1, currentPage - 1))}
        className={`px-4 py-2 rounded-lg border transition-all ${
          currentPage === 1
            ? 'border-sw-yellow/10 text-gray-600 cursor-not-allowed'
            : 'border-sw-yellow/20 text-gray-400 hover:border-sw-yellow/40 hover:text-sw-yellow'
        }`}
        onClick={(e) => currentPage === 1 && e.preventDefault()}
      >
        ← Previous
      </Link>

      <div className="flex gap-2">
        {pages.map((page, idx) => (
          page === '...' ? (
            <span key={`ellipsis-${idx}`} className="px-3 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <Link
              key={page}
              href={getPageUrl(page as number)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                currentPage === page
                  ? 'border-sw-yellow/40 bg-sw-yellow/10 text-sw-yellow font-semibold'
                  : 'border-sw-yellow/20 text-gray-400 hover:border-sw-yellow/40 hover:text-sw-yellow'
              }`}
            >
              {page}
            </Link>
          )
        ))}
      </div>

      <Link
        href={getPageUrl(Math.min(totalPages, currentPage + 1))}
        className={`px-4 py-2 rounded-lg border transition-all ${
          currentPage === totalPages
            ? 'border-sw-yellow/10 text-gray-600 cursor-not-allowed'
            : 'border-sw-yellow/20 text-gray-400 hover:border-sw-yellow/40 hover:text-sw-yellow'
        }`}
        onClick={(e) => currentPage === totalPages && e.preventDefault()}
      >
        Next →
      </Link>
    </div>
  );
}

