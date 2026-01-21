import { MovieSearchResponse, MovieSearchResult } from './definitions';
import { request } from 'undici';

export async function searchMovies(query: string): Promise<MovieSearchResult[]> {
  const { body } = await request(
    `https://imdb.iamidiotareyoutoo.com/search?q=${query}`,
    {
      headers: {
        Accept: '*/*',
      },
    }
  );
  const data = (await body.json()) as MovieSearchResponse;

  if (!data.ok) throw new Error('API error');

  return data.description;
}
