const BASE_URL = 'https://swapi.dev/api';

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  url: string;
}

export interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  url: string;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  url: string;
}

export interface APIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

// Mock data as fallback
const mockCharacters: Character[] = [
  { name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", eye_color: "blue", birth_year: "19BBY", gender: "male", homeworld: "https://swapi.dev/api/planets/1/", url: "https://swapi.dev/api/people/1/" },
  { name: "Darth Vader", height: "202", mass: "136", hair_color: "none", skin_color: "white", eye_color: "yellow", birth_year: "41.9BBY", gender: "male", homeworld: "https://swapi.dev/api/planets/1/", url: "https://swapi.dev/api/people/4/" },
  { name: "Leia Organa", height: "150", mass: "49", hair_color: "brown", skin_color: "light", eye_color: "brown", birth_year: "19BBY", gender: "female", homeworld: "https://swapi.dev/api/planets/2/", url: "https://swapi.dev/api/people/5/" },
];

const mockStarships: Starship[] = [
  { name: "Millennium Falcon", model: "YT-1300 light freighter", manufacturer: "Corellian Engineering Corporation", cost_in_credits: "100000", length: "34.37", max_atmosphering_speed: "1050", crew: "4", passengers: "6", cargo_capacity: "100000", consumables: "2 months", hyperdrive_rating: "0.5", MGLT: "75", starship_class: "Light freighter", url: "https://swapi.dev/api/starships/10/" },
  { name: "X-wing", model: "T-65 X-wing", manufacturer: "Incom Corporation", cost_in_credits: "149999", length: "12.5", max_atmosphering_speed: "1050", crew: "1", passengers: "0", cargo_capacity: "110", consumables: "1 week", hyperdrive_rating: "1.0", MGLT: "100", starship_class: "Starfighter", url: "https://swapi.dev/api/starships/12/" },
];

const mockPlanets: Planet[] = [
  { name: "Tatooine", rotation_period: "23", orbital_period: "304", diameter: "10465", climate: "arid", gravity: "1 standard", terrain: "desert", surface_water: "1", population: "200000", url: "https://swapi.dev/api/planets/1/" },
  { name: "Alderaan", rotation_period: "24", orbital_period: "364", diameter: "12500", climate: "temperate", gravity: "1 standard", terrain: "grasslands, mountains", surface_water: "40", population: "2000000000", url: "https://swapi.dev/api/planets/2/" },
];

const mockFilms: Film[] = [
  { title: "A New Hope", episode_id: 4, opening_crawl: "It is a period of civil war...", director: "George Lucas", producer: "Gary Kurtz, Rick McCallum", release_date: "1977-05-25", url: "https://swapi.dev/api/films/1/" },
  { title: "The Empire Strikes Back", episode_id: 5, opening_crawl: "It is a dark time for the Rebellion...", director: "Irvin Kershner", producer: "Gary Kurtz, Rick McCallum", release_date: "1980-05-17", url: "https://swapi.dev/api/films/2/" },
];

export async function getCharacters(page = 1): Promise<APIResponse<Character>> {
  console.log('🚀 FETCHING CHARACTERS FROM API...');
  try {
    const res = await fetch(`${BASE_URL}/people/?page=${page}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    console.log('✅ Characters data received:', data);
    console.log('📊 Count:', data.count);
    console.log('📝 Results:', data.results.length, 'items');
    return data;
  } catch (error) {
    console.warn('Using mock data for characters');
    return {
      count: mockCharacters.length,
      next: null,
      previous: null,
      results: mockCharacters,
    };
  }
}

export async function getStarships(page = 1): Promise<APIResponse<Starship>> {
  try {
    const res = await fetch(`${BASE_URL}/starships/?page=${page}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    console.log('✅ Starships data received:', data);
    return data;
  } catch (error) {
    console.warn('Using mock data for starships');
    return {
      count: mockStarships.length,
      next: null,
      previous: null,
      results: mockStarships,
    };
  }
}

export async function getPlanets(page = 1): Promise<APIResponse<Planet>> {
  try {
    const res = await fetch(`${BASE_URL}/planets/?page=${page}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    console.log('✅ Planets data received:', data);
    return data;
  } catch (error) {
    console.warn('Using mock data for planets');
    return {
      count: mockPlanets.length,
      next: null,
      previous: null,
      results: mockPlanets,
    };
  }
}

export async function getFilms(page = 1): Promise<APIResponse<Film>> {
  console.log('🚀 FETCHING FILMS FROM API...');
  try {
    const res = await fetch(`${BASE_URL}/films/?page=${page}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    console.log('✅ Films data received:', data);
    console.log('📊 Count:', data.count);
    console.log('📝 Results:', data.results.length, 'items');
    return data;
  } catch (error) {
    console.warn('Using mock data for films');
    return {
      count: mockFilms.length,
      next: null,
      previous: null,
      results: mockFilms,
    };
  }
}
