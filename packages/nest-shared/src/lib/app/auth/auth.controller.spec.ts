import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from '@spikey/nest-shared/app/auth/strategies/jwt.strategy';
import { HashService } from '@spikey/nest-shared/app/auth/hash.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { CustomPrismaModule } from 'nestjs-prisma';
import { ExtendedPrismaService } from '@spikey/nest-shared/prisma/extended-prisma.service';
import { UsersModule } from '@spikey/nest-shared/app/users/users.module';
import { registerConfigModule } from '@spikey/nest-shared/utils/register-config-module';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        registerConfigModule(),
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
      providers: [AuthService, HashService, JwtStrategy],
      controllers: [AuthController]
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
