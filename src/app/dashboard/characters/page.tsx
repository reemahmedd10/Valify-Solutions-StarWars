import { getCharacters } from '@/lib/swapi';
import CharactersList from '@/components/CharactersList';

interface PageProps {
  searchParams: { page?: string };
}

export default async function CharactersPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const data = await getCharacters(currentPage);

  return (
    <CharactersList 
      characters={data.results} 
      total={data.count}
      currentPage={currentPage}
    />
  );
}
