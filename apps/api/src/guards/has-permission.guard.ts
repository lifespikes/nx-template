import { HAS_PERMISSION_KEY, hasPermission } from '@spikey/shared/permissions';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { StatusCodes } from 'http-status-codes';
import { error } from '@spikey/shared/responses';

@Injectable()
export class HasPermissionGuard implements CanActivate {
  public constructor(private reflector: Reflector) {
  }

  public canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest();
    const requiredPermission = this.reflector.get<string>(
      HAS_PERMISSION_KEY,
      context.getHandler()
    );


    if (!requiredPermission) {
      return true;
    }

    if (!user || !hasPermission(user.permissions, requiredPermission)) {
      error(StatusCodes.FORBIDDEN, 'The user does not have sufficient privileges');
    }

    return true;
  }
}
