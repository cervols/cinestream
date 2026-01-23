import type { RegisterFormProps } from '@/lib/definitions';
import {
  UserCircleIcon,
  EnvelopeIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline';

export default function RegisterForm({ user, errors }: RegisterFormProps) {
  return (
    <div>
      <h2 className="text-2xl">Enter your name, email, and password</h2>
      <div className="mt-4 flex flex-col gap-4 max-w-md">
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
              defaultValue={user.username}
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${errors?.username ? "border-red-800" : ""}`}
            />
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {errors?.username && <div className="text-red-800 mt-1">{errors.username}</div>}
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
              defaultValue={user.email}
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${errors?.email ? "border-red-800" : ""}`}
            />
            <EnvelopeIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {errors?.email && <div className="text-red-800 mt-1">{errors.email}</div>}
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
              defaultValue={user.password}
              className={`peer block w-full rounded-md border border-gray-200 py-2 pl-10 outline-1 placeholder:text-gray-500 ${errors?.password ? "border-red-800" : ""}`}
            />
            <LockClosedIcon className="pointer-events-none absolute left-3 top-1/2 h-4.5 w-4.5 -translate-y-1/2 peer-focus:text-gray-100" />
          </div>
          {errors?.password && <div className="text-red-800 mt-1">{errors.password}</div>}
        </div>

        <button
          type="submit"
          name="action"
          value="next"
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-900 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
