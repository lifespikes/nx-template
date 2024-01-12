import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import registerConfig from '@app/config';
import { CommandModule } from 'nestjs-command';
import { OpenApiCommand } from '@app/app/commands/open-api.command';
import { RouteListCommand } from '@app/app/commands/route-list.command';

@Module({
  imports: [
    AuthModule,
    PrismaModule.forRoot({ isGlobal: true }),
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [...registerConfig()],
    }),
    UsersModule,
    CommandModule,
  ],
  controllers: [AppController],
  providers: [AppService, OpenApiCommand, RouteListCommand],
})
export class AppModule {}
