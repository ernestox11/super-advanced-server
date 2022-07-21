import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(userFilerQuery: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(userFilerQuery);
  }

  async find(userFilerQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(userFilerQuery);
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilerQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilerQuery, user);
  }
}
