'use server';

import { signOut } from '@/auth/auth';

export async function signOutUser() {
  try {
    await signOut({ redirect: false });
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
}
