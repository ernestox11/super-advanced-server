import { Injectable } from '@nestjs/common';
// import { nanoid } from 'nanoid';
import { UpdateUserInputDto } from './dto/update-user-input.dto';
import { User } from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getUserById(userId: string): Promise<User> {
    return this.usersRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  async createUser(email: string, age: number): Promise<User> {
    return this.usersRepository.create({
      userId: uuidv4(),
      email,
      age,
    });
  }

  async updateUser(
    userId: string,
    userUpdates: UpdateUserInputDto,
  ): Promise<User> {
    return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
  }
}
