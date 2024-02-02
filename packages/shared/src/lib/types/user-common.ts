import { User } from '@prisma/client';
import { PermissionType } from '@spikey/shared/permissions';

export type UserType = User & {
  permissions: PermissionType[];
};
