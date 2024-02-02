import { ApiProperty } from '@nestjs/swagger';

export class ModelEntity {
  constructor(partial?: Record<any, any>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
