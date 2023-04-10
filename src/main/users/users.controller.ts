import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
// import { CreateDriverInputDto } from './dto/create-driver-input.dto';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
// import { Driver } from './entities/driver.entity';

import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt';
import { LocalAuthGuard } from 'src/auth/local.auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get('drivers')
  // async getDrivers(): Promise<Driver[]> {
  //   return this.usersService.getDrivers();
  // }

  // @Get(':userId')
  // async getUser(@Param('userId', ParseUUIDPipe) userId: string): Promise<User> {
  //   return this.usersService.getUserById(userId);
  // }

  // @Get(':userName')
  // async getUser(userName: string): Promise<User> {
  //   console.log(userName);
  //   const username = userName.toLowerCase();
  //   const user = await this.usersService.getUser(username);
  //   return user;
  // }

  @Get(':userName')
  async getUser(@Param('userName') userName: string): Promise<User> {
    console.log(userName);
    // const username = userName.toLowerCase();
    const user = await this.usersService.getUser(userName);
    return user;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserInputDto): Promise<User> {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOrRounds,
    );
    return await this.usersService.createUser(
      createUserDto.email,
      createUserDto.userName,
      hashedPassword,
      createUserDto.isActive,
      createUserDto.firstName,
      createUserDto.lastName,
      createUserDto.branchOffice,
      createUserDto.accessLevel,
      createUserDto.nationality,
      createUserDto.idNumber,
      createUserDto.phoneNumber,
      createUserDto.driverLicenseStatus,
      createUserDto.designatedVehicleId,
      createUserDto.vehicleModel,
      createUserDto.vehicleVolume,
      createUserDto.vehicleWeight,
    );
  }

  // @Post('drivers')
  // async createDriver(
  //   @Body() createDriverDto: CreateDriverInputDto,
  // ): Promise<Driver> {
  //   return this.usersService.createDriver(
  //     createDriverDto.email,
  //     createDriverDto.userName,
  //     createDriverDto.password,
  //     createDriverDto.isActive,
  //     createDriverDto.firstName,
  //     createDriverDto.lastName,
  //     createDriverDto.branchOffice,
  //     createDriverDto.accessLevel,
  //     createDriverDto.nationality,
  //     createDriverDto.idNumber,
  //     createDriverDto.phoneNumber,
  //     createDriverDto.driverLicenseStatus,
  //     createDriverDto.designatedVehicleId,
  //     createDriverDto.vehicleModel,
  //     createDriverDto.vehicleVolume,
  //     createDriverDto.vehicleWeight,
  //   );
  // }

  @Patch(':userId')
  async updateUser(
    @Param('userId', ParseUUIDPipe) userId: string,
    @Body() updateUserDto: UpdateUserInputDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }

  //Post / Login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    // console.log(req.user);
    // console.log(req.body);
    return { User: req.user, msg: 'User logged in' };
  }
}
