import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Star Wars Dashboard',
  description: 'Explore the Star Wars universe - Characters, Starships, and Planets',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

