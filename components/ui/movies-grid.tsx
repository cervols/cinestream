import Image from 'next/image';
import { searchMovies } from '@/lib/data';

export default async function MoviesGrid({
  query,
}: {
  query: string;
}) {
  if (!query) {
    return null;
  }
  const movies = await searchMovies(query);

  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies?.map((movie) => (
          <div
            key={movie['#IMDB_ID']}
            className="rounded-lg border border-[#888] p-4 flex flex-col items-center"
          >
            {movie['#IMG_POSTER'] ? (
              <Image
                src={movie['#IMG_POSTER']}
                className="mb-2 rounded-md object-cover"
                width={140}
                height={210}
                alt={`${movie['#TITLE']}'s poster`}
              />
            ) : null}
            <p className="font-semibold text-white text-center">{movie['#TITLE']}</p>
            <p className="text-sm text-gray-500 text-center">{movie['#YEAR']}</p>
            <p className="text-xs text-gray-400 text-center">{movie['#ACTORS']}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
