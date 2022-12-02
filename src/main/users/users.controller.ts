import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDriverInputDto } from './dto/create-driver-input.dto';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { Driver } from './entities/driver.entity';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('drivers')
  async getDrivers(): Promise<Driver[]> {
    return this.usersService.getDrivers();
  }

  @Get(':userId')
  async getUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserInputDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.password,
      createUserDto.isActive,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.branchOffice,
      createUserDto.accessLevel,
      createUserDto.nationality,
      createUserDto.idNumber,
      createUserDto.phoneNumber,
    );
  }

  @Post('drivers')
  async createDriver(
    @Body() createDriverDto: CreateDriverInputDto,
  ): Promise<Driver> {
    return this.usersService.createDriver(
      createDriverDto.email,
      createDriverDto.password,
      createDriverDto.isActive,
      createDriverDto.firstName,
      createDriverDto.lastName,
      createDriverDto.branchOffice,
      createDriverDto.accessLevel,
      createDriverDto.nationality,
      createDriverDto.idNumber,
      createDriverDto.phoneNumber,
      createDriverDto.driverLicenseStatus,
      createDriverDto.designatedVehicleId,
      createDriverDto.vehicleModel,
      createDriverDto.vehicleVolume,
      createDriverDto.vehicleWeight,
    );
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId', ParseUUIDPipe) userId: string,
    @Body() updateUserDto: UpdateUserInputDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}
