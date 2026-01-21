import Search from '@/components/ui/search';
import MoviesGrid from '@/components/ui/movies-grid';
import { MoviesGridSkeleton } from '@/components/ui/skeletons';
import { Suspense } from 'react';

export default async function Page(props: {
  searchParams?: Promise<{
    q?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || '';

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl">Movie Catalog</h1>
      <div className="mt-14 flex items-center w-full justify-between gap-2 md:mt-8">
        <Search placeholder="Search movies..." />
      </div>
      <Suspense fallback={<MoviesGridSkeleton />}>
        <MoviesGrid query={query} />
      </Suspense>
    </div>
  );
}
