import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import authConfig from '@app/config/auth';
import { JwtStrategy } from '@app/app/auth/jwt.strategy';
import { UsersModule } from '@app/app/users/users.module';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: authConfig().jtwSecret,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
