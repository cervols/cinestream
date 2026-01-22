'use server';

import { z } from 'zod';

const registrationSchema = z.object({
  id: z.string(),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

export type State = {
  message?: string | null;
  errors?: {
    username?: string[];
    email?: string[];
    password?: string[];
  };
}

const RegisterUser = registrationSchema.omit({id: true})

export async function registerUser(prevState: State, formData: FormData) {
  const validatedFields = RegisterUser.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
}
