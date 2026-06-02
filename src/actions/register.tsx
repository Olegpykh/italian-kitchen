'use server';

import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { IFormData } from '@/types/form-data';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});
const prisma = new PrismaClient({ adapter });

export async function registerUser(formData: IFormData) {
  const { email, password } = formData;



  try {
    const user = await (prisma as any).user.create({
      data: { email, password },
    });
    console.log('user', user);
    return user;
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'Registration failed' };
  }
}
