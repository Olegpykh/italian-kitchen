import { object, string, coerce } from 'zod';

export const signInSchema = object({
  email: string().min(1, 'Email is required').email('Invalid email'),
  password: string()
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .max(32, 'Password must be less than 32 characters'),
});

export const ingredientSchema = object({
  name: string().min(1, 'Name is required'),
  category: string().optional(),
  unit: string().optional(),
  pricePerUnit: coerce.number().optional().nullable(),
  description: string().optional(),
});
