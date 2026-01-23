'use client';

import { useActionState } from 'react';
import { validateUser, validatePlan } from '@/lib/actions';
import RegisterForm from './register-form';
import PlanSelection from './register-plan';
import Confirmation from './register-confirmation';
import type { WizardState } from '@/lib/definitions';

const initialWizardState: WizardState = {
  user: { username: '', email: '', password: '' },
  plan: '',
  step: 1,
  errors: {},
};

async function wizardAction(prevState: WizardState, formData: FormData) {
  const step = Number(formData.get('step')) || prevState.step;
  let user = prevState.user;
  let plan = prevState.plan;
  let errors: Record<string, string[]> = {};

  if (step === 1) {
    user = {
      username: formData.get('username')?.toString() || '',
      email: formData.get('email')?.toString() || '',
      password: formData.get('password')?.toString() || '',
    };

    const result = await validateUser(user);
    if (!result.success) {
      errors = result.errors;
      return {
        user,
        plan,
        step,
        errors,
      };
    }
  }
  if (step === 2) {
    plan = formData.get('plan')?.toString() || '';

    const result = await validatePlan(plan);
    if (!result.success) {
      errors = result.errors;
      return {
        user,
        plan,
        step,
        errors,
      };
    }
  }

  // Move to next or previous step
  let nextStep = step;
  if (formData.get('action') === 'next') nextStep = step + 1;
  if (formData.get('action') === 'back') nextStep = step - 1;

  // If user submits on confirmation step, show success
  if (step === 3 && formData.get('action') === 'next') {
    return {
      user,
      plan,
      step: 4,
      errors,
    };
  }

  return {
    user,
    plan,
    step: nextStep,
    errors,
  };
}

export default function RegisterWizard() {
  const [state, formAction] = useActionState(wizardAction, initialWizardState);

  return (
    <div className="max-w-xl mx-auto py-10">
      {state.step === 4 ? (
        <div className="p-8 rounded border text-white text-center text-xl font-semibold">
          Registration successful! Welcome, {state.user.username}.
        </div>
      ) : (
        <form action={formAction}>
          {state.step === 1 && (
            <RegisterForm
              user={state.user}
              errors={state.errors}
            />
          )}
          {state.step === 2 && (
            <PlanSelection
              plan={state.plan}
              errors={state.errors}
            />
          )}
          {state.step === 3 && (
            <Confirmation
              state={state}
            />
          )}
          {/* Hidden fields for step and action */}
          <input type="hidden" name="step" value={state.step} />
        </form>
      )}
    </div>
  );
}
