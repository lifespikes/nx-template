import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@spikey/nest-shared/app/users/users.module';
import { CustomPrismaModule } from 'nestjs-prisma';
import { ExtendedPrismaService } from '@spikey/nest-shared/prisma/extended-prisma.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { HashService } from '@spikey/nest-shared/app/auth/hash.service';
import { JwtStrategy } from '@spikey/nest-shared/app/auth/strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import registerConfig from '@spikey/nest-shared/config';

describe('AuthService', () => {
  let service: AuthService;

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
      providers: [AuthService, HashService, JwtStrategy]
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
