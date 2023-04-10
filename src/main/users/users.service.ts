import { Injectable } from '@nestjs/common';
// import { nanoid } from 'nanoid';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { User } from './entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { UsersRepository } from './users.repository';
// import { Driver } from './entities/driver.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne(userId);
  }

  async getUser(username: string): Promise<User> {
    // console.log('getUser');
    return this.usersRepository.findOne(username);
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  // async getDrivers(): Promise<Driver[]> {
  //   return this.usersRepository.findDrivers();
  // }

  async createUser(
    email: string,
    userName: string,
    password: string,
    isActive: boolean,
    firstName: string,
    lastName: string,
    branchOffice: string,
    accessLevel: string,
    nationality: string,
    idNumber: number,
    phoneNumber: [number],
    driverLicenseStatus: string,
    designatedVehicleId: string,
    vehicleModel: string,
    vehicleVolume: number,
    vehicleWeight: number,
  ): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      email,
      userName,
      password,
      isActive,
      firstName,
      lastName,
      branchOffice,
      accessLevel,
      nationality,
      idNumber,
      phoneNumber,
      driverLicenseStatus,
      designatedVehicleId,
      vehicleModel,
      vehicleVolume,
      vehicleWeight,
    });
  }

  // async createDriver(
  //   email: string,
  //   userName: string,
  //   password: string,
  //   isActive: boolean,
  //   firstName: string,
  //   lastName: string,
  //   branchOffice: string,
  //   accessLevel: string,
  //   nationality: string,
  //   idNumber: number,
  //   phoneNumber: [number],
  //   driverLicenseStatus: string,
  //   designatedVehicleId: string,
  //   vehicleModel: string,
  //   vehicleVolume: number,
  //   vehicleWeight: number,
  // ): Promise<Driver> {
  //   return this.usersRepository.createDriver({
  //     userId: uuidv4(),
  //     email,
  //     userName,
  //     password,
  //     isActive,
  //     firstName,
  //     lastName,
  //     branchOffice,
  //     accessLevel,
  //     nationality,
  //     idNumber,
  //     phoneNumber,
  //     driverLicenseStatus,
  //     designatedVehicleId,
  //     vehicleModel,
  //     vehicleVolume,
  //     vehicleWeight,
  //   });
  // }

  async updateUser(
    userId: string,
    userUpdates: UpdateUserInputDto,
  ): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
