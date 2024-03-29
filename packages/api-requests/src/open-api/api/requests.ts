/**
 * Generated by orval v6.23.0 🍺
 * Do not edit manually.
 * Spikey
 * API description
 * OpenAPI spec version: 1.0
 */
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import useAppControllerGetDataMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type { ErrorType as AppControllerGetDataErrorType } from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useAuthControllerLoginMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type {
  ErrorType as AuthControllerLoginErrorType,
  BodyType as AuthControllerLoginBodyType,
} from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useUsersControllerStoreMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type {
  ErrorType as UsersControllerStoreErrorType,
  BodyType as UsersControllerStoreBodyType,
} from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useUsersControllerIndexMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type { ErrorType as UsersControllerIndexErrorType } from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useUsersControllerShowMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type { ErrorType as UsersControllerShowErrorType } from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useUsersControllerUpdateMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type {
  ErrorType as UsersControllerUpdateErrorType,
  BodyType as UsersControllerUpdateBodyType,
} from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import useUsersControllerDestroyMutator from '../../../../../apps/frontend/src/lib/mutator/custom-client';
import type { ErrorType as UsersControllerDestroyErrorType } from '../../../../../apps/frontend/src/lib/mutator/custom-client';
export type UpdateUserDtoRole = { [key: string]: any };

export interface UpdateUserDto {
  email?: string;
  isVerified?: boolean;
  name?: string;
  password?: string;
  phone?: string;
  role?: UpdateUserDtoRole;
}

export type UserEntityRole = { [key: string]: any };

export interface UserEntity {
  createdAt: string;
  email: string;
  id: number;
  isVerified: boolean;
  name: string;
  phone: string;
  role: UserEntityRole;
  updatedAt: string;
}

export type CreateUserDtoRole = { [key: string]: any };

export interface CreateUserDto {
  email: string;
  isVerified: boolean;
  name: string;
  password: string;
  phone: string;
  role: CreateUserDtoRole;
}

export type AuthEntityRole = { [key: string]: any };

export interface AuthEntity {
  accessToken: string;
  createdAt: string;
  email: string;
  id: number;
  isVerified: boolean;
  name: string;
  phone: string;
  role: AuthEntityRole;
  updatedAt: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export const useAppControllerGetDataHook = () => {
  const appControllerGetData = useAppControllerGetDataMutator<void>();

  return (signal?: AbortSignal) => {
    return appControllerGetData({ url: `/api`, method: 'GET', signal });
  };
};

export const getAppControllerGetDataQueryKey = () => {
  return [`/api`] as const;
};

export const useAppControllerGetDataInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
  >,
  TError = AppControllerGetDataErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseInfiniteQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetDataQueryKey();

  const appControllerGetData = useAppControllerGetDataHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
  > = ({ signal }) => appControllerGetData(signal);

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetDataInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
>;
export type AppControllerGetDataInfiniteQueryError =
  AppControllerGetDataErrorType<unknown>;

export const useAppControllerGetDataInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
  >,
  TError = AppControllerGetDataErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseInfiniteQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
      TError,
      TData
    >
  >;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useAppControllerGetDataInfiniteQueryOptions(options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useAppControllerGetDataQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
  TError = AppControllerGetDataErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getAppControllerGetDataQueryKey();

  const appControllerGetData = useAppControllerGetDataHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
  > = ({ signal }) => appControllerGetData(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type AppControllerGetDataQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>
>;
export type AppControllerGetDataQueryError =
  AppControllerGetDataErrorType<unknown>;

export const useAppControllerGetData = <
  TData = Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
  TError = AppControllerGetDataErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useAppControllerGetDataHook>>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useAppControllerGetDataQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useAuthControllerLoginHook = () => {
  const authControllerLogin = useAuthControllerLoginMutator<AuthEntity>();

  return (loginDto: AuthControllerLoginBodyType<LoginDto>) => {
    return authControllerLogin({
      url: `/api/auth/login`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: loginDto,
    });
  };
};

export const useAuthControllerLoginMutationOptions = <
  TError = AuthControllerLoginErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAuthControllerLoginHook>>>,
    TError,
    { data: AuthControllerLoginBodyType<LoginDto> },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useAuthControllerLoginHook>>>,
  TError,
  { data: AuthControllerLoginBodyType<LoginDto> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const authControllerLogin = useAuthControllerLoginHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useAuthControllerLoginHook>>>,
    { data: AuthControllerLoginBodyType<LoginDto> }
  > = (props) => {
    const { data } = props ?? {};

    return authControllerLogin(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type AuthControllerLoginMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useAuthControllerLoginHook>>>
>;
export type AuthControllerLoginMutationBody =
  AuthControllerLoginBodyType<LoginDto>;
export type AuthControllerLoginMutationError =
  AuthControllerLoginErrorType<unknown>;

export const useAuthControllerLogin = <
  TError = AuthControllerLoginErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useAuthControllerLoginHook>>>,
    TError,
    { data: AuthControllerLoginBodyType<LoginDto> },
    TContext
  >;
}) => {
  const mutationOptions = useAuthControllerLoginMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUsersControllerStoreHook = () => {
  const usersControllerStore = useUsersControllerStoreMutator<UserEntity>();

  return (createUserDto: UsersControllerStoreBodyType<CreateUserDto>) => {
    return usersControllerStore({
      url: `/api/users`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createUserDto,
    });
  };
};

export const useUsersControllerStoreMutationOptions = <
  TError = UsersControllerStoreErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerStoreHook>>>,
    TError,
    { data: UsersControllerStoreBodyType<CreateUserDto> },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerStoreHook>>>,
  TError,
  { data: UsersControllerStoreBodyType<CreateUserDto> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const usersControllerStore = useUsersControllerStoreHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerStoreHook>>>,
    { data: UsersControllerStoreBodyType<CreateUserDto> }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerStore(data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerStoreMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerStoreHook>>>
>;
export type UsersControllerStoreMutationBody =
  UsersControllerStoreBodyType<CreateUserDto>;
export type UsersControllerStoreMutationError =
  UsersControllerStoreErrorType<unknown>;

export const useUsersControllerStore = <
  TError = UsersControllerStoreErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerStoreHook>>>,
    TError,
    { data: UsersControllerStoreBodyType<CreateUserDto> },
    TContext
  >;
}) => {
  const mutationOptions = useUsersControllerStoreMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUsersControllerIndexHook = () => {
  const usersControllerIndex = useUsersControllerIndexMutator<UserEntity[]>();

  return (signal?: AbortSignal) => {
    return usersControllerIndex({ url: `/api/users`, method: 'GET', signal });
  };
};

export const getUsersControllerIndexQueryKey = () => {
  return [`/api/users`] as const;
};

export const useUsersControllerIndexInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
  >,
  TError = UsersControllerIndexErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseInfiniteQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersControllerIndexQueryKey();

  const usersControllerIndex = useUsersControllerIndexHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
  > = ({ signal }) => usersControllerIndex(signal);

  return { queryKey, queryFn, ...queryOptions } as UseInfiniteQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersControllerIndexInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
>;
export type UsersControllerIndexInfiniteQueryError =
  UsersControllerIndexErrorType<unknown>;

export const useUsersControllerIndexInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
  >,
  TError = UsersControllerIndexErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseInfiniteQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
      TError,
      TData
    >
  >;
}): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useUsersControllerIndexInfiniteQueryOptions(options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUsersControllerIndexQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
  TError = UsersControllerIndexErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
      TError,
      TData
    >
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersControllerIndexQueryKey();

  const usersControllerIndex = useUsersControllerIndexHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
  > = ({ signal }) => usersControllerIndex(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersControllerIndexQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>
>;
export type UsersControllerIndexQueryError =
  UsersControllerIndexErrorType<unknown>;

export const useUsersControllerIndex = <
  TData = Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
  TError = UsersControllerIndexErrorType<unknown>,
>(options?: {
  query?: Partial<
    UseQueryOptions<
      Awaited<ReturnType<ReturnType<typeof useUsersControllerIndexHook>>>,
      TError,
      TData
    >
  >;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useUsersControllerIndexQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUsersControllerShowHook = () => {
  const usersControllerShow = useUsersControllerShowMutator<UserEntity>();

  return (id: number, signal?: AbortSignal) => {
    return usersControllerShow({
      url: `/api/users/${id}`,
      method: 'GET',
      signal,
    });
  };
};

export const getUsersControllerShowQueryKey = (id: number) => {
  return [`/api/users/${id}`] as const;
};

export const useUsersControllerShowInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
  >,
  TError = UsersControllerShowErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersControllerShowQueryKey(id);

  const usersControllerShow = useUsersControllerShowHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
  > = ({ signal }) => usersControllerShow(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersControllerShowInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
>;
export type UsersControllerShowInfiniteQueryError =
  UsersControllerShowErrorType<unknown>;

export const useUsersControllerShowInfinite = <
  TData = InfiniteData<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
  >,
  TError = UsersControllerShowErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
        TError,
        TData
      >
    >;
  },
): UseInfiniteQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useUsersControllerShowInfiniteQueryOptions(id, options);

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryResult<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUsersControllerShowQueryOptions = <
  TData = Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
  TError = UsersControllerShowErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersControllerShowQueryKey(id);

  const usersControllerShow = useUsersControllerShowHook();

  const queryFn: QueryFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
  > = ({ signal }) => usersControllerShow(id, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!id,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type UsersControllerShowQueryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>
>;
export type UsersControllerShowQueryError =
  UsersControllerShowErrorType<unknown>;

export const useUsersControllerShow = <
  TData = Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
  TError = UsersControllerShowErrorType<unknown>,
>(
  id: number,
  options?: {
    query?: Partial<
      UseQueryOptions<
        Awaited<ReturnType<ReturnType<typeof useUsersControllerShowHook>>>,
        TError,
        TData
      >
    >;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = useUsersControllerShowQueryOptions(id, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};

export const useUsersControllerUpdateHook = () => {
  const usersControllerUpdate = useUsersControllerUpdateMutator<UserEntity>();

  return (
    id: number,
    updateUserDto: UsersControllerUpdateBodyType<UpdateUserDto>,
  ) => {
    return usersControllerUpdate({
      url: `/api/users/${id}`,
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      data: updateUserDto,
    });
  };
};

export const useUsersControllerUpdateMutationOptions = <
  TError = UsersControllerUpdateErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerUpdateHook>>>,
    TError,
    { id: number; data: UsersControllerUpdateBodyType<UpdateUserDto> },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerUpdateHook>>>,
  TError,
  { id: number; data: UsersControllerUpdateBodyType<UpdateUserDto> },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const usersControllerUpdate = useUsersControllerUpdateHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerUpdateHook>>>,
    { id: number; data: UsersControllerUpdateBodyType<UpdateUserDto> }
  > = (props) => {
    const { id, data } = props ?? {};

    return usersControllerUpdate(id, data);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerUpdateMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerUpdateHook>>>
>;
export type UsersControllerUpdateMutationBody =
  UsersControllerUpdateBodyType<UpdateUserDto>;
export type UsersControllerUpdateMutationError =
  UsersControllerUpdateErrorType<unknown>;

export const useUsersControllerUpdate = <
  TError = UsersControllerUpdateErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerUpdateHook>>>,
    TError,
    { id: number; data: UsersControllerUpdateBodyType<UpdateUserDto> },
    TContext
  >;
}) => {
  const mutationOptions = useUsersControllerUpdateMutationOptions(options);

  return useMutation(mutationOptions);
};

export const useUsersControllerDestroyHook = () => {
  const usersControllerDestroy = useUsersControllerDestroyMutator<UserEntity>();

  return (id: number) => {
    return usersControllerDestroy({
      url: `/api/users/${id}`,
      method: 'DELETE',
    });
  };
};

export const useUsersControllerDestroyMutationOptions = <
  TError = UsersControllerDestroyErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerDestroyHook>>>,
    TError,
    { id: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerDestroyHook>>>,
  TError,
  { id: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const usersControllerDestroy = useUsersControllerDestroyHook();

  const mutationFn: MutationFunction<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerDestroyHook>>>,
    { id: number }
  > = (props) => {
    const { id } = props ?? {};

    return usersControllerDestroy(id);
  };

  return { mutationFn, ...mutationOptions };
};

export type UsersControllerDestroyMutationResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof useUsersControllerDestroyHook>>>
>;

export type UsersControllerDestroyMutationError =
  UsersControllerDestroyErrorType<unknown>;

export const useUsersControllerDestroy = <
  TError = UsersControllerDestroyErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<ReturnType<typeof useUsersControllerDestroyHook>>>,
    TError,
    { id: number },
    TContext
  >;
}) => {
  const mutationOptions = useUsersControllerDestroyMutationOptions(options);

  return useMutation(mutationOptions);
};

export const getAuthControllerLoginMock = () => ({
  accessToken: faker.word.sample(),
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  isVerified: faker.datatype.boolean(),
  name: faker.word.sample(),
  phone: faker.word.sample(),
  role: {},
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getUsersControllerStoreMock = () => ({
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  isVerified: faker.datatype.boolean(),
  name: faker.word.sample(),
  phone: faker.word.sample(),
  role: {},
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getUsersControllerIndexMock = () =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
    email: faker.word.sample(),
    id: faker.number.int({ min: undefined, max: undefined }),
    isVerified: faker.datatype.boolean(),
    name: faker.word.sample(),
    phone: faker.word.sample(),
    role: {},
    updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  }));

export const getUsersControllerShowMock = () => ({
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  isVerified: faker.datatype.boolean(),
  name: faker.word.sample(),
  phone: faker.word.sample(),
  role: {},
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getUsersControllerUpdateMock = () => ({
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  isVerified: faker.datatype.boolean(),
  name: faker.word.sample(),
  phone: faker.word.sample(),
  role: {},
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getUsersControllerDestroyMock = () => ({
  createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
  email: faker.word.sample(),
  id: faker.number.int({ min: undefined, max: undefined }),
  isVerified: faker.datatype.boolean(),
  name: faker.word.sample(),
  phone: faker.word.sample(),
  role: {},
  updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`,
});

export const getSpikeyMock = () => [
  http.get('*/api', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.post('*/api/auth/login', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getAuthControllerLoginMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.post('*/api/users', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getUsersControllerStoreMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get('*/api/users', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getUsersControllerIndexMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.get('*/api/users/:id', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getUsersControllerShowMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.patch('*/api/users/:id', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getUsersControllerUpdateMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
  http.delete('*/api/users/:id', async () => {
    await delay(1000);
    return new HttpResponse(JSON.stringify(getUsersControllerDestroyMock()), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
