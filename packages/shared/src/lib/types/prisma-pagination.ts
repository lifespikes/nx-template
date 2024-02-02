import { Prisma } from '@prisma/client';
import {
  CursorPaginationMeta,
  CursorPaginationOptions, GetCursorFunction,
  PageNumberPaginationMeta,
  PageNumberPaginationOptions, ParseCursorFunction
} from 'prisma-extension-pagination/dist/types';

export type WithPages<O extends PaginatorOptions['pages'], T, A> = <TOptions extends PageNumberPaginationOptions, P extends PageNumberPaginationOptions>(options: TOptions & {
  limit: P['limit'];
}) => Promise<[
  Prisma.Result<T, A, 'findMany'>,
  PageNumberPaginationMeta<TOptions extends {
    includePageCount: boolean;
  } ? TOptions['includePageCount'] : O extends {
    includePageCount: boolean;
  } ? O['includePageCount'] : false>
]>

export type Paginator<O extends PaginatorOptions> = <T, A>(this: T, args?: Prisma.Exact<A, Omit<Prisma.Args<T, 'findMany'>, 'cursor' | 'take' | 'skip'>>) => {
  withPages: O['pages'] extends {
    limit: number;
  } ? <TOptions extends Omit<P, 'limit'>, P extends PageNumberPaginationOptions>(options?: TOptions & {
    limit?: P['limit'];
  }) => Promise<[
    Prisma.Result<T, A, 'findMany'>,
    PageNumberPaginationMeta<TOptions extends {
      includePageCount: boolean;
    } ? TOptions['includePageCount'] : O['pages'] extends {
      includePageCount: boolean;
    } ? O['pages']['includePageCount'] : false>
  ]> : WithPages<O['pages'], T, A>;
  withCursor: O['cursor'] extends {
    limit: number;
  } ? <TOptions extends Omit<P, 'limit'>, P extends CursorPaginationOptions<Prisma.Result<T, A, 'findMany'>[number], NonNullable<Prisma.Args<T, 'findMany'>['cursor']>>>(options?: TOptions & {
    limit?: P['limit'];
  }) => Promise<[Prisma.Result<T, A, 'findMany'>, CursorPaginationMeta]> : <TOptions extends Omit<P, 'limit'>, P extends CursorPaginationOptions<Prisma.Result<T, A, 'findMany'>[number], NonNullable<Prisma.Args<T, 'findMany'>['cursor']>>>(options: TOptions & {
    limit: P['limit'];
  }) => Promise<[Prisma.Result<T, A, 'findMany'>, CursorPaginationMeta]>;
};

export type PaginatorOptions = {
  pages?: {
    limit?: number;
    includePageCount?: boolean;
  };
  cursor?: {
    limit?: number;
    getCursor?: GetCursorFunction<any>;
    parseCursor?: ParseCursorFunction<any>;
  };
};
