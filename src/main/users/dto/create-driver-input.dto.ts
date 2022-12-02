import { IsNumber, IsString } from 'class-validator';
import { CreateUserInputDto } from './create-user-input.dto';

export class CreateDriverInputDto extends CreateUserInputDto {
  @IsString()
  driverLicenseStatus: string;

  @IsString()
  designatedVehicleId: string;

  @IsString()
  vehicleModel: string;

  @IsNumber()
  vehicleVolume: number;

  @IsNumber()
  vehicleWeight: number;
}
