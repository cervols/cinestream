'use server';

import prisma from '@/lib/prisma';
import { z } from 'zod';
import type { Plan, Comment } from '@/lib/definitions';

const registrationSchema = z.object({
  id: z.string(),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

const RegisterUser = registrationSchema.omit({id: true});

export async function validateUser(user: { username: string; email: string; password: string }) {
  const result = RegisterUser.safeParse(user);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: 'Validation failed.',
      success: false,
    };
  }
  return { errors: {}, message: null, success: true };
}

export async function validatePlan(plan: string) {
  const validPlans: Plan[] = ['basic', 'pro', 'premium'];

  if (plan === '') {
    return {
      errors: { plan: ['Plan is required'] },
      message: 'Validation failed.',
      success: false,
    };
  }

  if (!validPlans.includes(plan as Plan)) {
    return {
      errors: { plan: ['Invalid plan selected'] },
      message: 'Validation failed.',
      success: false,
    };
  }

  return { errors: {}, message: null, success: true };
}

const commentSchema = z.object({
  comment: z.string().min(1, 'Comment cannot be empty').max(500, 'Comment cannot exceed 500 characters'),
});

export async function validateComment(data: {comment: string  }) {
  const result = commentSchema.safeParse(data);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: 'Validation failed.',
      success: false,
    };
  }
  return { errors: {}, message: null, success: true };
}

export async function createComment(prevState: any, formData: FormData) {
  const content = formData.get('content') as string;
  const validationResult = await validateComment({ comment: content });
  if (!validationResult.success) {
    return { message: validationResult.message };
  }
  await prisma.comment.create({ data: { content } });
  return { message: null };
}
