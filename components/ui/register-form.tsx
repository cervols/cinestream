'use client';

import { useActionState } from "react";
import { registerUser, State } from '@/lib/actions'
import {
  UserCircleIcon,
  EnvelopeIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(registerUser, initialState);
  console.log("form state", state);

  return(
    <form action={formAction}>
      <div className="mt-8 flex flex-col gap-4 max-w-md">

        {/* User name */}
        <label htmlFor="username" className="mt-2">
          Enter your username
        </label>
        <div>
          <div className="relative h-11 flex items-center">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your username"
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${state.errors?.username ? "border-red-800" : ""}`}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {state.errors?.username && <div className="text-red-800 mt-1">{state.errors.username}</div>}
        </div>

        {/* User email */}
        <label htmlFor="email" className="mt-2">
          Enter your email
        </label>
        <div>
          <div className="relative h-11 flex items-center">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Enter your email"
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${state.errors?.email ? "border-red-800" : ""}`}
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {state.errors?.email && <div className="text-red-800 mt-1">{state.errors.email}</div>}
        </div>

        {/* User password */}
        <label htmlFor="password" className="mt-2">
          Enter your password
        </label>
        <div>
          <div className="relative h-11 flex items-center">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${state.errors?.password ? "border-red-800" : ""}`}
            />
            <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {state.errors?.password && <div className="text-red-800 mt-1">{state.errors.password}</div>}
        </div>

        <button
          type="submit"
          className="mt-8 ml-2 px-4 py-2 rounded bg-gray-300 text-gray-900 hover:bg-gray-500 transition"
        >
          Go next
        </button>
      </div>
    </form>
  )
}
