import { ApiProperty } from '@nestjs/swagger';
import {
  Paginator,
  PaginatorOptions,
  WithPages
} from '@spikey/shared/types/prisma-pagination';
import _ from 'lodash';
import { ModelEntity } from './model.entity';
import { plainToInstance } from 'class-transformer';

export class PaginatedEntity<T extends Record<any, any>> {
  protected entity = ModelEntity;
  protected paginator: ReturnType<Paginator<PaginatorOptions>>;
  protected limit: number = 10;

  async simplePagination() {
    const withPages = this.paginator.withPages as WithPages<any, any, any>;
    const [data, meta] = await withPages({
      limit: this.limit,
      includePageCount: true
    });
    this.data = plainToInstance(this.entity, data);
    this.currentPage = meta.currentPage;
    this.pageCount = meta.pageCount;
    this.totalCount = meta.totalCount;

    return _.omit(this, ['paginator', 'limit']);
  }

  constructor(paginator: ReturnType<Paginator<T>>) {
    this.paginator = paginator;
    this.data = [];
  }

  data: Record<any, any>;

  @ApiProperty()
  currentPage: number;

  @ApiProperty()
  pageCount: number;

  @ApiProperty()
  totalCount: number;
}
