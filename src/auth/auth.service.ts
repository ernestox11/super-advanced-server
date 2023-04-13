import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../main/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateUser(userName: string, password: string): Promise<any> {
    // console.log('Auth service');
    const user = await this.usersService.getUser(userName);
    // console.log(user);
    let passwordValid = null;
    if (user != null) {
      passwordValid = await bcrypt.compare(password, user.password);
      if (!user) {
        throw new NotAcceptableException('could not find the user');
      }
      if (user && passwordValid) {
        return {
          userId: user.userId,
          userName: user.firstName + ' ' + user.lastName,
          accessLevel: user.accessLevel,
        };
      }
    }

    return null;
  }
}
