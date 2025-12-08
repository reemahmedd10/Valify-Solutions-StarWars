import { getCharacters } from '@/lib/swapi';
import CharactersList from '@/components/CharactersList';

export default async function CharactersPage() {
  const data = await getCharacters();

  return <CharactersList characters={data.results} total={data.count} />;
}
