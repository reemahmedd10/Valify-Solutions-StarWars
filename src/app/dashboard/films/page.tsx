import { getFilms } from '@/lib/swapi';
import FilmsList from '@/components/FilmsList';

interface PageProps {
  searchParams: { page?: string };
}

export default async function FilmsPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await getFilms(currentPage);

  return (
    <FilmsList 
      films={data.results} 
      total={data.count}
      currentPage={currentPage}
    />
  );
}

