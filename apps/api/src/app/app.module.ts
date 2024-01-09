import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({ isGlobal: true }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
