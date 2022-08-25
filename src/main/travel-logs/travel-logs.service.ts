import { Injectable } from '@nestjs/common';
import { CreateTravelLogDto } from './dto/create-travel-log.dto';
import { UpdateTravelLogDto } from './dto/update-travel-log.dto';

@Injectable()
export class TravelLogsService {
  create(createTravelLogDto: CreateTravelLogDto) {
    return 'This action adds a new travelLog';
  }

  findAll() {
    return `This action returns all travelLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} travelLog`;
  }

  update(id: number, updateTravelLogDto: UpdateTravelLogDto) {
    return `This action updates a #${id} travelLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} travelLog`;
  }
}
