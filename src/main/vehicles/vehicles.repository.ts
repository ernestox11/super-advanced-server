import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { Vehicle } from './entities/vehicle.entity';

@Injectable()
export class VehiclesRepository {
  constructor(
    @InjectModel(Vehicle.name) private readonly vehicleModel: Model<Vehicle>,
  ) {}

  async findOne(vehicleId: string): Promise<Vehicle> {
    let vehicle: Vehicle;

    if (!vehicle) {
      if (isValidObjectId(vehicleId))
        vehicle = await this.vehicleModel.findById(vehicleId);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!vehicle) {
      throw new NotFoundException();
    }
    return vehicle;
  }

  async find(vehicleFilterQuery: FilterQuery<Vehicle>): Promise<Vehicle[]> {
    return this.vehicleModel.find(vehicleFilterQuery);
  }

  async create(vehicle: Vehicle): Promise<Vehicle> {
    const newVehicle = new this.vehicleModel(vehicle);
    return newVehicle.save();
  }

  async findByIdAndUpdate(
    id: string,
    vehicle: Partial<Vehicle>,
  ): Promise<Vehicle> {
    return this.vehicleModel.findByIdAndUpdate(id, vehicle);
  }

  async deleteOne(vehicleId: string) {
    if (isValidObjectId(vehicleId)) {
      const { deletedCount } = await this.vehicleModel.deleteOne({
        _id: vehicleId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `Vehicle with id: "${vehicleId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
