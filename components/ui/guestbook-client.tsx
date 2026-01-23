"use client";

import { useActionState } from "react";
import { createComment } from '@/lib/actions';

export default function GuestbookClient() {
  const [state, formAction] = useActionState(createComment, { message: null });

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl mb-8">Guestbook</h1>
      {state.message && <div className="text-red-800 mt-1">{state.message}</div>}
      <form action={formAction} className="mb-8">
        <textarea
          name="content"
          rows={4}
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Leave your comment here..."
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
