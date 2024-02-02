import { Command, CommandRunner } from 'nest-commander';
import { UsersService } from '@spikey/nest-shared/app/users/users.service';
import { Prisma, Role } from '@prisma/client';

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

@Command({
  name: 'prisma:seed',
  description: 'Generate seeders',
})
export class PrismaSeedCommand extends CommandRunner {
  constructor(private userService: UsersService) {
    super();
  }

  async run() {
    for (const { name, email } of userData) {
      const user = await this.userService.create({
        name: name ?? '',
        email,
        phone: '',
        is_verified: true,
        password: 'secret',
        role: Role.SUPER_USER,
      });

      console.log(`Created user with id: ${user.id}`);
    }

    console.log(`Seeding finished.`);
  }
}
