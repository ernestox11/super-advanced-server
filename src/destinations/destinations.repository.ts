import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Destination, DestinationDocument } from './schemas/destination.schema';

@Injectable()
export class DestinationsRepository {
  constructor(
    @InjectModel(Destination.name)
    private destinationModel: Model<DestinationDocument>,
  ) {}

  async findOne(
    destinationFilterQuery: FilterQuery<Destination>,
  ): Promise<Destination> {
    return this.destinationModel.findOne(destinationFilterQuery);
  }

  async find(
    destinationFilterQuery: FilterQuery<Destination>,
  ): Promise<Destination[]> {
    return this.destinationModel.find(destinationFilterQuery);
  }

  async create(destination: Destination): Promise<Destination> {
    const newUser = new this.destinationModel(destination);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilerQuery: FilterQuery<Destination>,
    destination: Partial<Destination>,
  ): Promise<Destination> {
    return this.destinationModel.findOneAndUpdate(userFilerQuery, destination);
  }
}
