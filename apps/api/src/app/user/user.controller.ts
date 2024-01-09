import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  async getUsers() {
    return await this.userService.all();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create({
      data: {
        email: createUserDto.email,
        phone: createUserDto.phone,
        name: createUserDto.name,
        isVerified: createUserDto.isVerified
      }
    });
  }
}
