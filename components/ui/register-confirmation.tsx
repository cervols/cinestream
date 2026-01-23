import type { ConfirmationProps } from '@/lib/definitions';

export default function Confirmation({ state }: ConfirmationProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl">Confirm your details</h2>
      <div className="mt-2 border-2 rounded p-4">
        <div><strong className="text-white">Username:</strong> {state.user.username}</div>
        <div><strong className="text-white">Email:</strong> {state.user.email}</div>
        <div><strong className="text-white">Plan:</strong> {state.plan}</div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          type="submit"
          name="action"
          value="back"
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-400 transition"
        >
          Back
        </button>
        <button
          type="submit"
          name="action"
          value="next"
          className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-900 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
