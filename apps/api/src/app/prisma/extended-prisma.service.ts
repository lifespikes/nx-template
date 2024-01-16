import { Injectable } from '@nestjs/common';
import { CustomPrismaClientFactory } from 'nestjs-prisma';
import {
  ExtendedPrismaClient,
  extendedPrismaClient,
} from '@app/app/prisma/extendedPrismaClient';

@Injectable()
export class ExtendedPrismaService
  implements CustomPrismaClientFactory<ExtendedPrismaClient>
{
  constructor() {}

  createPrismaClient(): ExtendedPrismaClient {
    return extendedPrismaClient;
  }
}
