import { SetMetadata } from '@nestjs/common';
import { HAS_PERMISSION_KEY } from '@spikey/shared/permissions';


export function HasPermission(permission: string) {
  return SetMetadata(HAS_PERMISSION_KEY, permission);
}
