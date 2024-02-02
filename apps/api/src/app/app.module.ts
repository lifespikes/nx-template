import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouteListCommand } from '@spikey/api/commands/route-list.command';
import { OpenApiCommand } from '@spikey/api/commands/open-api.command';
import { PrismaSeedCommand } from '@spikey/nest-shared/commands/prisma-seed.command';
import { CustomPrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import registerConfig from '@spikey/nest-shared/config';
import { ExtendedPrismaService } from '@spikey/nest-shared/prisma/extended-prisma.service';
import { AuthModule } from '@spikey/nest-shared/app/auth/auth.module';
import { UsersModule } from '@spikey/nest-shared/app/users/users.module';

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
  providers: [AppService, RouteListCommand, OpenApiCommand, PrismaSeedCommand]
})
export class AppModule {
}
