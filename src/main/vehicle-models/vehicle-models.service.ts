import { Injectable } from '@nestjs/common';
import { CreateVehicleModelDto } from './dto/create-vehicle-model.dto';
import { UpdateVehicleModelDto } from './dto/update-vehicle-model.dto';
import { VehicleModel } from './entities/vehicle-model.entity';
import { VehicleModelsRepository } from './vehicle-models.repository';

@Injectable()
export class VehicleModelsService {
  constructor(
    private readonly vehicleModelRepository: VehicleModelsRepository,
  ) {}

  create(createVehicleModelDto: CreateVehicleModelDto): Promise<VehicleModel> {
    return this.vehicleModelRepository.create(createVehicleModelDto);
  }

  findAll() {
    return this.vehicleModelRepository.find({});
  }

  findById(id: string) {
    return this.vehicleModelRepository.findById(id);
  }

  update(id: string, vehicleModelUpdates: UpdateVehicleModelDto) {
    return this.vehicleModelRepository.findByIdAndUpdate(
      id,
      vehicleModelUpdates,
    );
  }

  remove(id: string) {
    return this.vehicleModelRepository.deleteOne(id);
  }
}
