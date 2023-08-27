import { PrismaClient } from '@prisma/client';

export const createContext = () => {
  const prisma = new PrismaClient();

  return {
    prisma,
  };
};
