import { ApiProperty } from '@nestjs/swagger';
import { Role, User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { ModelEntity } from '@spikey/nest-shared/entities/model.entity';

export type UserWithoutPassword = Omit<User, 'password'>;

export class UserEntity extends ModelEntity implements UserWithoutPassword {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  is_verified: boolean;

  @ApiProperty({
    example: Role.USER
  })
  role: Role;

  @Exclude()
  password?: string;
}
