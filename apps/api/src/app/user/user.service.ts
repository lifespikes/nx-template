import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {
  }

  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput
    });
  }

  async all(): Promise<User[] | null> {
    return this.prisma.user.findMany();
  }

  async create(data: Prisma.UserCreateArgs): Promise<User | null> {
    return this.prisma.user.create(data);
  }
}
