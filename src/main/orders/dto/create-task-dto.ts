import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  @IsNotEmpty()
  orderNumber: number;

  @IsString()
  @IsNotEmpty()
  productID: string;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsNumber()
  @IsNotEmpty()
  deliveredQuantity: number;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  volume: number;

  @IsNumber()
  @IsNotEmpty()
  weight: number;
}
