import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { ConfigModule } from '@nestjs/config';
import registerConfig from '@spikey/nest-shared/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CustomPrismaModule } from 'nestjs-prisma';
import { ExtendedPrismaService } from '@spikey/nest-shared/prisma/extended-prisma.service';
import { UsersModule } from '@spikey/nest-shared/app/users/users.module';
import { HashService } from '@spikey/nest-shared/app/auth/hash.service';
import { JwtStrategy } from '@spikey/nest-shared/app/auth/strategies/jwt.strategy';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          load: [...registerConfig()]
        }),
        PassportModule,
        JwtModule,
        EventEmitterModule.forRoot({
          global: true
        }),
        CustomPrismaModule.forRootAsync({
          name: 'PrismaService',
          useClass: ExtendedPrismaService,
          isGlobal: true
        }),
        UsersModule
      ],
      providers: [UsersService, HashService, JwtStrategy]
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
