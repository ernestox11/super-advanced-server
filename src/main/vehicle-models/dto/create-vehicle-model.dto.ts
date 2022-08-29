import { IsNumber, IsString } from 'class-validator';

export class CreateVehicleModelDto {
  @IsString()
  brand: string;

  @IsString()
  modelName: string;

  @IsNumber()
  year: number;

  @IsString()
  type: string;
}
