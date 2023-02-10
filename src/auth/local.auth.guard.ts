import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  //   handleRequest(err, user, info, context, status) {
  //     const request = context.switchToHttp().getRequest();
  //     console.log(request.body);
  //     console.log(user);
  //     const { userName, password } = request.body;
  //     console.log(err);
  //     if (err || !user) {
  //       if (!userName) {
  //         throw new HttpException({ message: 'User not found' }, HttpStatus.OK);
  //       } else if (!password) {
  //         throw new HttpException({ message: 'Pass not found' }, HttpStatus.OK);
  //       } else {
  //         throw err || new UnauthorizedException();
  //       }
  //     } else {
  //       console.log('All good');
  //     }
  //     return user;
  //   }
}
