import { UserType } from '@spikey/shared/types';
import { Role } from '@prisma/client';


export const HAS_PERMISSION_KEY = 'has_permission';

export const permissions = {
  accessAdminControl: 'accessAdminControl',
  createUsers: 'createUsers',
  createAccess: 'createAccess',
  createAccount: 'createAccount'
} as const;

export function getPermissions(aRole: Role): string[] {
  switch (aRole) {
    case 'SUPER_USER':
      return Object.values(permissions);
    case 'ADMIN':
      return [
        permissions.accessAdminControl,
        permissions.createAccess,
        permissions.createAccount,
        permissions.createUsers
      ];

    case 'DEMO':
      return [permissions.accessAdminControl];

    case 'USER':
      return [
        permissions.createAccess,
        permissions.createAccount
      ];

    default:
      return [];
  }
}


export function hasPermission(
  aPermissions: string[] = [],
  aPermission: string
) {
  return aPermissions.includes(aPermission);
}

export function hasRole(aUser: UserType, aRole: Role): boolean {
  return aUser?.role === aRole;
}
