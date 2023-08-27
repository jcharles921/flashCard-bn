
import { PrismaClient } from "@prisma/client";
import { collectionData, userData,cardsCollection} from "../data/";


const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);
 await prisma.user.createMany({data: userData});
   await prisma.collection.createMany({data: collectionData});
   await prisma.card.createMany({data: cardsCollection});
console.log(`Seeding finished.`);
    

}

main()
    .catch(async (e) => {

        await prisma.collection.deleteMany({});
        await prisma.user.deleteMany({}); 
        await prisma.card.deleteMany({});
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });