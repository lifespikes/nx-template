import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { getApp } from '../src/bootstrap';
import { ConfigService } from '@nestjs/config';

const prisma = new PrismaClient();

const userData: Omit<Prisma.UserCreateInput, 'password'>[] = [
  {
    name: 'Santiago Guerrero',
    email: 'test@test.com'
  },

  {
    name: 'Santiago 258',
    email: 'santigp258@gmail.com'
  }
];

async function main() {
  const app = await getApp();
  const config = app.get(ConfigService);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: {
        ...u,
        password: await bcrypt.hash('secret', config.get('auth.roundsOfHashing'))
      }
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
