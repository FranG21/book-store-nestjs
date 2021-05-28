import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly _reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles: string[] = this._reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!roles) {
      return true;
    }

    const requets = context.switchToHttp().getRequest();
    const { user } = requets;

    const hasRole = () =>
      user.roles.some((role: string) => roles.includes(role));

    return user && user.roles && hasRole();
  }
}
