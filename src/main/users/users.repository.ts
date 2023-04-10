import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
// import { Driver } from './entities/driver.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  //  @InjectModel(Driver.name) private readonly driverModel: Model<Driver>,

  async findOne(userName: string): Promise<User> {
    // console.log('user.service.findOne');
    const user = await this.userModel.findOne({ userName: userName });
    // console.log(user);
    return user;
  }

  async find(userFilterQuery: FilterQuery<User>): Promise<User[]> {
    return await this.userModel.find(userFilterQuery);
  }

  // async findDrivers(): Promise<Driver[]> {
  //   return this.driverModel.find({ accessLevel: 'Conductor' });
  // }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  // async createDriver(driver: Driver): Promise<Driver> {
  //   const newDriver = new this.driverModel(driver);
  //   return newDriver.save();
  // }

  async findOneAndUpdate(
    userFilterQuery: FilterQuery<User>,
    user: Partial<User>,
  ): Promise<User> {
    return this.userModel.findOneAndUpdate(userFilterQuery, user);
  }
}
