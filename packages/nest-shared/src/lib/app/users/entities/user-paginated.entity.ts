import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '@spikey/nest-shared/app/users/entities/user.entity';
import { PaginatedEntity } from '@spikey/nest-shared/entities/paginated.entity';

export class UserPaginatedEntity extends PaginatedEntity<UserEntity> {
  protected entity = UserEntity;
  @ApiProperty({ isArray: true, type: UserEntity })
  data: UserEntity[];
}
