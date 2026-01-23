import type { PlanSelectionProps, Plan } from '@/lib/definitions';

export default function PlanSelection({ plan, errors }: PlanSelectionProps) {
  const plans: { id: Plan; label: string; description: string }[] = [
    { id: 'basic', label: 'Basic', description: 'Basic plan features.' },
    { id: 'pro', label: 'Pro', description: 'Pro plan with more features.' },
    { id: 'premium', label: 'Premium', description: 'All features included.' },
  ];

  return (
    <div>
      <h2 className="text-2xl">Select your plan</h2>
      <div className="mt-8 flex flex-col gap-3">
        {plans.map((p) => (
          <label key={p.id} className={`border rounded p-4 flex items-center gap-4 cursor-pointer ${plan === p.id ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>
            <input
              type="radio"
              name="plan"
              value={p.id}
              defaultChecked={plan === p.id}
              className="accent-blue-600"
            />
            <span className="font-semibold">{p.label}</span>
            <span className="text-gray-500 text-sm">{p.description}</span>
          </label>
        ))}
      </div>
      {errors?.plan && <div className="text-red-600">{errors.plan.join(', ')}</div>}
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
          className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-900 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
