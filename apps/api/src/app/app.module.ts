import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomPrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import registerConfig from '@app/config';
import { OpenApiCommand } from '@app/app/commands/open-api.command';
import { RouteListCommand } from '@app/app/commands/route-list.command';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ExtendedPrismaService } from '@app/prisma/extended-prisma.service';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      global: true
    }),
    ConfigModule.forRoot({
      envFilePath: '../../.env',
      isGlobal: true,
      load: [...registerConfig()]
    }),
    CustomPrismaModule.forRootAsync({
      name: 'PrismaService',
      useClass: ExtendedPrismaService,
      isGlobal: true
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService, OpenApiCommand, RouteListCommand]
})
export class AppModule {
}
