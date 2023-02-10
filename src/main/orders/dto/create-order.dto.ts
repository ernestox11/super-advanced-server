import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from './create-task-dto';

export class CreateOrderDto extends PartialType(CreateTaskDto) {
  @IsNumber()
  @IsNotEmpty()
  orderNumber: number;

  @IsString()
  @IsNotEmpty()
  clientId: string;

  @IsString()
  @IsNotEmpty()
  clientName: string;

  @IsString()
  @IsNotEmpty()
  branchOffice: string;

  @IsString()
  @IsNotEmpty()
  receptionPointId: string;

  @IsString()
  @IsNotEmpty()
  orderType: string;

  @IsNotEmpty()
  tasks: [Task];
}
