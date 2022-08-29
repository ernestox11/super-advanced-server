import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { LoadCapacity } from './entities/load-capacity.entity';

@Injectable()
export class LoadCapacitiesRepository {
  constructor(
    @InjectModel(LoadCapacity.name)
    private readonly loadCapacityModel: Model<LoadCapacity>,
  ) {}

  async findOne(loadCapacityId: string): Promise<LoadCapacity> {
    let loadCapacity: LoadCapacity;

    if (!loadCapacity) {
      if (isValidObjectId(loadCapacityId))
        loadCapacity = await this.loadCapacityModel.findById(loadCapacityId);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!loadCapacity) {
      throw new NotFoundException();
    }
    return loadCapacity;
  }

  async find(
    loadCapacityFilterQuery: FilterQuery<LoadCapacity>,
  ): Promise<LoadCapacity[]> {
    return this.loadCapacityModel.find(loadCapacityFilterQuery);
  }

  async create(loadCapacity: LoadCapacity): Promise<LoadCapacity> {
    const newLoadCapacity = new this.loadCapacityModel(loadCapacity);
    return newLoadCapacity.save();
  }

  async findByIdAndUpdate(
    id: string,
    loadCapacity: Partial<LoadCapacity>,
  ): Promise<LoadCapacity> {
    return this.loadCapacityModel.findByIdAndUpdate(id, loadCapacity);
  }

  async deleteOne(loadCapacityId: string) {
    if (isValidObjectId(loadCapacityId)) {
      const { deletedCount } = await this.loadCapacityModel.deleteOne({
        _id: loadCapacityId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `LoadCapacity with id: "${loadCapacityId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
