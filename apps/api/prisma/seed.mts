import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const userData: Omit<Prisma.UserCreateInput, 'password'>[] = [
  {
    name: 'Santiago Guerrero',
    email: 'test@test.com',
  },

  {
    name: 'Santiago 258',
    email: 'santigp258@gmail.com',
  },
];

async function main() {
  for (const u of userData) {
    const user = await prisma.user.create({
      data: {
        ...u,
        password: await bcrypt.hash('secret', 10),
      },
    });

    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
