import { X_COMPANY_ID } from 'src/core'; 
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class HasUserId implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    if (!(X_COMPANY_ID in request.headers)) {
      throw new ForbiddenException({
        message: `${X_COMPANY_ID} is required in header`,
      });
    }
    return true;
  }
}
