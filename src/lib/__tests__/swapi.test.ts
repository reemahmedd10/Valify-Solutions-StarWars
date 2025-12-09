import { getCharacters, getStarships, getPlanets } from '../swapi';

global.fetch = jest.fn();

describe('SWAPI Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getCharacters', () => {
    it('fetches characters from SWAPI', async () => {
      const mockData = {
        count: 82,
        next: null,
        previous: null,
        results: [{ name: 'Luke Skywalker', height: '172' }],
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await getCharacters();

      expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/?page=1');
      expect(result).toEqual(mockData);
    });

    it('fetches specific page of characters', async () => {
      const mockData = { count: 82, results: [] };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      await getCharacters(2);

      expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/people/?page=2');
    });

    it('throws error when fetch fails', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      });

      await expect(getCharacters()).rejects.toThrow('Failed to fetch characters');
    });
  });

  describe('getStarships', () => {
    it('fetches starships from SWAPI', async () => {
      const mockData = {
        count: 36,
        results: [{ name: 'X-wing', model: 'T-65 X-wing' }],
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await getStarships();

      expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/starships/?page=1');
      expect(result).toEqual(mockData);
    });

    it('throws error when fetch fails', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      });

      await expect(getStarships()).rejects.toThrow('Failed to fetch starships');
    });
  });

  describe('getPlanets', () => {
    it('fetches planets from SWAPI', async () => {
      const mockData = {
        count: 60,
        results: [{ name: 'Tatooine', climate: 'arid' }],
      };

      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await getPlanets();

      expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/?page=1');
      expect(result).toEqual(mockData);
    });

    it('throws error when fetch fails', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
      });

      await expect(getPlanets()).rejects.toThrow('Failed to fetch planets');
    });
  });
});

