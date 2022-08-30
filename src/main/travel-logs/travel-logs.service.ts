import { Injectable } from '@nestjs/common';
import { CreateTravelLogDto } from './dto/create-travel-log.dto';
import { UpdateTravelLogDto } from './dto/update-travel-log.dto';
import { TravelLog } from './entities/travel-log.entity';
import { TravelLogsRepository } from './travel-logs.repository';

@Injectable()
export class TravelLogsService {
  constructor(private readonly travelLogRepository: TravelLogsRepository) {}

  create(createTravelLogDto: CreateTravelLogDto): Promise<TravelLog> {
    return this.travelLogRepository.create(createTravelLogDto);
  }

  findAll() {
    return this.travelLogRepository.find({});
  }

  findById(id: string) {
    return this.travelLogRepository.findOne(id);
  }

  update(id: string, travelLogUpdates: UpdateTravelLogDto) {
    return this.travelLogRepository.findByIdAndUpdate(id, travelLogUpdates);
  }

  remove(id: string) {
    return this.travelLogRepository.deleteOne(id);
  }
}
