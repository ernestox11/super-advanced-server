import { IsNumber, IsString } from 'class-validator';
import { DeliveryStep } from '../entities/delivery-step.entity';

export class CreateDeliveryRouteDto {
  @IsString()
  driverId: string;

  @IsString()
  service: string;

  @IsString()
  status: string;

  steps: [DeliveryStep];
}
