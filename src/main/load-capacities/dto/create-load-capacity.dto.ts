import { IsNumber, IsString } from 'class-validator';

export class CreateLoadCapacityDto {
  @IsString()
  name: string;

  @IsNumber()
  volume: number;

  @IsNumber()
  weight: number;

  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;
}
