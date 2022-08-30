import { IsNumber, IsString } from 'class-validator';
import { DeliveryStep } from '../entities/delivery-step.entity';

export class CreateDeliveryRouteDto {
  @IsString()
  driverId: string;

  @IsString()
  vehicleId: string;

  @IsNumber()
  service: number;

  @IsString()
  status: string;

  steps: [DeliveryStep];
}
