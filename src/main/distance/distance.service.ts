import { Injectable } from '@nestjs/common';
import { CreateDistanceDto } from './dto/create-distance.dto';
import { UpdateDistanceDto } from './dto/update-distance.dto';

@Injectable()
export class DistanceService {
  create(createDistanceDto: CreateDistanceDto) {
    return 'This action adds a new distance';
  }

  findAll() {
    return `This action returns all distance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} distance`;
  }

  update(id: number, updateDistanceDto: UpdateDistanceDto) {
    return `This action updates a #${id} distance`;
  }

  remove(id: number) {
    return `This action removes a #${id} distance`;
  }
}
