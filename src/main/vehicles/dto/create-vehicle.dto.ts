import { LoadCapacity } from 'src/main/load-capacities/entities/load-capacity.entity';
import { VehicleModel } from 'src/main/vehicle-models/entities/vehicle-model.entity';

export class CreateVehicleDto {
  status: string;
  branchOfficeId: string;
  capacity: LoadCapacity;
  model: VehicleModel;
}
