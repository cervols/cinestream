export function MovieGridSkeleton() {
  return (
    <div className="rounded-lg border border-gray-500 p-4 flex flex-col items-center">
      <div className="h-60 w-40 mb-5 rounded-lg bg-gray-600"></div>
      <div className="ml-2 h-4 mb-2 w-20 rounded-md bg-gray-600"></div>
      <div className="ml-2 h-4 mb-2 w-15 rounded-md bg-gray-600"></div>
      <div className="ml-2 h-4 mb-2 w-30 rounded-md bg-gray-600"></div>
    </div>
  )
}

export function MoviesGridSkeleton() {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
        <MovieGridSkeleton />
      </div>
    </div>
  );
}
