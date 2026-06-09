import { prisma } from './prisma'; // ← именованный импорт

export async function getUserFromDb(email: string) {
  return await (prisma as any).user.findFirst({
    where: {
      email,
    },
  });
}
