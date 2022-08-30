import { IsNumber, IsString } from 'class-validator';
import { Task } from '../entities/task.entity';

export class CreateOrderDto {
  @IsNumber()
  orderNumber: number;

  @IsString()
  clientId: string;

  @IsString()
  branchOffice: string;

  @IsString()
  receptionPointId: string;

  @IsString()
  orderType: string;

  tasks: [Task];
}
