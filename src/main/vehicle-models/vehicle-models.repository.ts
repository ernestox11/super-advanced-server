import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { VehicleModel } from './entities/vehicle-model.entity';

@Injectable()
export class VehicleModelsRepository {
  constructor(
    @InjectModel(VehicleModel.name)
    private readonly vehicleModelModel: Model<VehicleModel>,
  ) {}

  async findById(vehicleModelId: string): Promise<VehicleModel> {
    let vehicleModel: VehicleModel;

    if (!vehicleModel) {
      if (isValidObjectId(vehicleModelId))
        vehicleModel = await this.vehicleModelModel.findById(vehicleModelId);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!vehicleModel) {
      throw new NotFoundException();
    }
    return vehicleModel;
  }

  async find(
    vehicleModelFilterQuery: FilterQuery<VehicleModel>,
  ): Promise<VehicleModel[]> {
    return this.vehicleModelModel.find(vehicleModelFilterQuery);
  }

  async create(vehicleModel: VehicleModel): Promise<VehicleModel> {
    const newVehicleModel = new this.vehicleModelModel(vehicleModel);
    return newVehicleModel.save();
  }

  async findByIdAndUpdate(
    vehicleModelId: string,
    vehicleModel: Partial<VehicleModel>,
  ): Promise<VehicleModel> {
    return this.vehicleModelModel.findByIdAndUpdate(
      {
        _id: vehicleModelId,
      },
      vehicleModel,
    );
  }

  async deleteOne(vehicleModelId: string) {
    if (isValidObjectId(vehicleModelId)) {
      const { deletedCount } = await this.vehicleModelModel.deleteOne({
        _id: vehicleModelId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `VehicleModel with id: "${vehicleModelId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
