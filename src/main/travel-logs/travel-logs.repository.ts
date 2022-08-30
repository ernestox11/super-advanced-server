import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { TravelLog } from './entities/travel-log.entity';

@Injectable()
export class TravelLogsRepository {
  constructor(
    @InjectModel(TravelLog.name)
    private readonly travelLogModel: Model<TravelLog>,
  ) {}

  async findOne(id: string): Promise<TravelLog> {
    let travelLog: TravelLog;

    if (!travelLog) {
      if (isValidObjectId(id))
        travelLog = await this.travelLogModel.findById(id);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!travelLog) {
      throw new NotFoundException();
    }
    return travelLog;
  }

  async find(
    travelLogFilterQuery: FilterQuery<TravelLog>,
  ): Promise<TravelLog[]> {
    return this.travelLogModel.find(travelLogFilterQuery);
  }

  async create(travelLog: TravelLog): Promise<TravelLog> {
    const newTravelLog = new this.travelLogModel(travelLog);
    return newTravelLog.save();
  }

  async findByIdAndUpdate(
    id: string,
    travelLog: Partial<TravelLog>,
  ): Promise<TravelLog> {
    return this.travelLogModel.findByIdAndUpdate(id, travelLog);
  }

  async deleteOne(travelLogId: string) {
    if (isValidObjectId(travelLogId)) {
      const { deletedCount } = await this.travelLogModel.deleteOne({
        _id: travelLogId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `TravelLog with id: "${travelLogId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
