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

export interface APIResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export async function getCharacters(page = 1): Promise<APIResponse<Character>> {
  const res = await fetch(`${BASE_URL}/people/?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch characters');
  return res.json();
}

export async function getStarships(page = 1): Promise<APIResponse<Starship>> {
  const res = await fetch(`${BASE_URL}/starships/?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch starships');
  return res.json();
}

export async function getPlanets(page = 1): Promise<APIResponse<Planet>> {
  const res = await fetch(`${BASE_URL}/planets/?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch planets');
  return res.json();
}

