import { getPlanets } from '@/lib/swapi';
import PlanetsList from '@/components/PlanetsList';

interface PageProps {
  searchParams: { page?: string };
}

export default async function PlanetsPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await getPlanets(currentPage);

  return (
    <PlanetsList 
      planets={data.results} 
      total={data.count}
      currentPage={currentPage}
    />
  );
}
