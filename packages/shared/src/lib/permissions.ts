import { UserType } from '@spikey/shared/types';
import { Role } from '@prisma/client';


export const HAS_PERMISSION_KEY = 'has_permission';

export const permissions = {
  accessAdminControl: 'accessAdminControl',
  accessAssistant: 'accessAssistant',
  createAccess: 'createAccess',
  createAccount: 'createAccount'
} as const;

export function getPermissions(aRole: Role): string[] {
  switch (aRole) {
    case 'ADMIN':
      return [
        permissions.accessAdminControl,
        permissions.accessAssistant,
        permissions.createAccess,
        permissions.createAccount
      ];

    case 'DEMO':
      return [permissions.accessAssistant];

    case 'USER':
      return [
        permissions.accessAssistant,
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
