import { Prisma, PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { getApp } from '../src/bootstrap';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../src/app/users/users.service';

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
  const users = app.get(UsersService);

  for (const { name, email, phone } of userData) {
    const user = await users.create({
      name,
      email,
      phone,
      password: await bcrypt.hash('secret', config.get('auth.roundsOfHashing')),
      isVerified: true
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
