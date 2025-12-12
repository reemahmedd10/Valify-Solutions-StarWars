'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-6xl mb-6">⚠️</div>
      <h2 className="text-2xl font-bold text-white mb-2">
        Failed to load films
      </h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        {error.message || 'Something went wrong while fetching film data from SWAPI.'}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-sw-yellow/10 border border-sw-yellow/30 rounded-lg text-sw-yellow font-medium hover:bg-sw-yellow/20 transition-all"
      >
        Try again
      </button>
    </div>
  );
}

