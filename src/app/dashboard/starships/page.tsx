import { getStarships } from '@/lib/swapi';
import StarshipsList from '@/components/StarshipsList';

export default async function StarshipsPage() {
  const data = await getStarships();

  return <StarshipsList starships={data.results} total={data.count} />;
}
