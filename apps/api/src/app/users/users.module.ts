import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserCreatedListener } from '@app/app/users/listeners/user-created.listener';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserCreatedListener],
  exports: [UsersService],
})
export class UsersModule {}
