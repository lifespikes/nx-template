import { applyDecorators, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '@spikey/nest-shared/app/auth/guards/jwt-auth.guard';
import { HasPermissionGuard } from '@spikey/nest-shared/guards/has-permission.guard';

import { HasPermission } from '@spikey/nest-shared/decorators/has-permission.decorator';

export function Auth(permission: string) {
  return applyDecorators(
    HasPermission(permission),
    UseGuards(JwtAuthGuard, HasPermissionGuard),
    ApiBearerAuth()
  );
}
