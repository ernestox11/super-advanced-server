import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Driver } from './entities/driver.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Driver.name) private readonly driverModel: Model<Driver>,
  ) {}

  async findOne(userId: string): Promise<User> {
    return this.userModel.findOne({ userId: userId });
  }

  async find(userFilterQuery: FilterQuery<User>): Promise<User[]> {
    return this.userModel.find(userFilterQuery);
  }

  async findDrivers(): Promise<Driver[]> {
    return this.driverModel.find({ accessLevel: 'Conductor' });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async createDriver(driver: Driver): Promise<Driver> {
    const newDriver = new this.driverModel(driver);
    return newDriver.save();
  }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, user);
  }
}
