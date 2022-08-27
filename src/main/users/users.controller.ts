import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { UpdateUserInputDto } from './dto/update-user-input.dto';

import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
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

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserInputDto,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}