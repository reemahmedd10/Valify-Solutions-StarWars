import { getStarships } from '@/lib/swapi';
import StarshipsList from '@/components/StarshipsList';

interface PageProps {
  searchParams: { page?: string };
}

export default async function StarshipsPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await getStarships(currentPage);

  return (
    <StarshipsList 
      starships={data.results} 
      total={data.count}
      currentPage={currentPage}
    />
  );
}
