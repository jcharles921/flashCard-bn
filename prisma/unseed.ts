import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function undoSeed() {
  try {
    await prisma.card.deleteMany({});
    await prisma.collection.deleteMany({});
    await prisma.user.deleteMany({}); 
   
    console.log('Seed undone!');
  } catch (error) {
    console.error('Error undoing seed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

undoSeed();