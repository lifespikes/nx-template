import { HAS_PERMISSION_KEY, hasPermission } from '@spikey/shared/permissions';
import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';

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

    console.log(requiredPermission, user.permissions);

    if (!requiredPermission) {
      return true;
    }

    if (!user || !hasPermission(user.permissions, requiredPermission)) {
      throw new HttpException(
        getReasonPhrase(StatusCodes.FORBIDDEN),
        StatusCodes.FORBIDDEN
      );
    }

    return true;
  }
}
