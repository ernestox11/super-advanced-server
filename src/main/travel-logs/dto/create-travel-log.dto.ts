import { IsNumber, IsString } from 'class-validator';
import { Log } from '../entities/log.entity';

export class CreateTravelLogDto {
  @IsString()
  originId: string;

  @IsString()
  destinationId: string;

  @IsNumber()
  estimatedTravelTime: number;

  @IsNumber()
  estimatedDeliveryTime: number;

  log: [Log];
}
