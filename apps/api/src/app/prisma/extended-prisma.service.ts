import { Injectable } from '@nestjs/common';
import { CustomPrismaClientFactory } from 'nestjs-prisma';
import {
  ExtendedPrismaClient,
  extendedPrismaClient,
} from '@app/app/prisma/extended-prisma-client';

@Injectable()
export class ExtendedPrismaService
  implements CustomPrismaClientFactory<ExtendedPrismaClient>
{
  constructor() {}

  createPrismaClient(): ExtendedPrismaClient {
    return extendedPrismaClient;
  }
}