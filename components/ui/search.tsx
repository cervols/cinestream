'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import Form from 'next/form';

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  async function handleFormAction(formData: FormData) {
    const term = formData.get('q')?.toString() || '';
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <Form action={handleFormAction} className="relative flex flex-1">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        name="q"
        className="block w-full rounded-md border border-gray-500 py-2.25 pl-10 text-sm placeholder:text-gray-500 focus:border-white"
        placeholder={placeholder}
        defaultValue={searchParams.get('q')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-3 h-4.5 w-4.5 text-gray-500" />
      <button
        type="submit"
        className="ml-2 px-4 py-2 rounded bg-gray-300 text-gray-900 hover:bg-gray-500 transition"
      >
        Search
      </button>
    </Form>
  );
}
