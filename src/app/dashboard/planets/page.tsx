import { getPlanets } from '@/lib/swapi';
import PlanetsList from '@/components/PlanetsList';

export default async function PlanetsPage() {
  const data = await getPlanets();

  return <PlanetsList planets={data.results} total={data.count} />;
}
