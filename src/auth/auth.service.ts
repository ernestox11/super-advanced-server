import { Injectable, NotAcceptableException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../main/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async validateUser(userName: string, password: string): Promise<any> {
    // console.log('Auth service');
    const user = await this.usersService.getUser(userName);
    let passwordValid = null;
    if (password) {
      passwordValid = await bcrypt.compare(password, user.password);
    }
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return {
        userId: user.userId,
        userName: user.userName,
        accessLevel: user.accessLevel,
      };
    }
    return null;
  }
}
