import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './data/create-user.dto';
import { UpdateUserDto } from './data/update-user.dto';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserCreatedEvent } from '@app/app/users/events/user-created.event';
import { type ExtendedPrismaClient } from '@app/app/prisma/extendedPrismaClient';
import { CustomPrismaService } from 'nestjs-prisma';

@Injectable()
export class UsersService {
  constructor(
    @Inject('PrismaService')
    private prisma: CustomPrismaService<ExtendedPrismaClient>,
    private config: ConfigService,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      this.config.get('auth.roundsOfHashing'),
    );

    const user = await this.prisma.client.user.create({
      data: createUserDto,
    });

    this.eventEmitter.emit('user.created', new UserCreatedEvent(user));

    return user;
  }

  findAll() {
    return this.prisma.client.user.findMany();
  }

  paginate() {
    return this.prisma.client.user.paginate();
  }

  findOne(id: number) {
    return this.prisma.client.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(
        updateUserDto.password,
        this.config.get('auth.roundsOfHashing'),
      );
    }

    return this.prisma.client.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.client.user.delete({ where: { id } });
  }
}
