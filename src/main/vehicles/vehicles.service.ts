import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { VehiclesRepository } from './vehicles.repository';

@Injectable()
export class VehiclesService {
  constructor(private readonly vehiclesRepository: VehiclesRepository) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.vehiclesRepository.create(createVehicleDto);
  }

  findAll() {
    return this.vehiclesRepository.find({});
  }

  findByIdById(id: string) {
    return this.vehiclesRepository.findById(id);
  }

  update(id: string, updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesRepository.findByIdAndUpdate(id, updateVehicleDto);
  }

  remove(id: string) {
    return this.vehiclesRepository.deleteOne(id);
  }
}
