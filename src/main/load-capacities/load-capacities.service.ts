import { Injectable } from '@nestjs/common';
import { CreateLoadCapacityDto } from './dto/create-load-capacity.dto';
import { UpdateLoadCapacityDto } from './dto/update-load-capacity.dto';
import { LoadCapacitiesRepository } from './load-capacities.repository';

@Injectable()
export class LoadCapacitiesService {
  constructor(
    private readonly loadCapacityRepository: LoadCapacitiesRepository,
  ) {}
  create(createLoadCapacityDto: CreateLoadCapacityDto) {
    return this.loadCapacityRepository.create(createLoadCapacityDto);
  }

  findAll() {
    return this.loadCapacityRepository.find({});
  }

  findOneById(id: string) {
    return this.loadCapacityRepository.findOne(id);
  }

  update(id: string, updateLoadCapacityDto: UpdateLoadCapacityDto) {
    return this.loadCapacityRepository.findOneAndUpdate(
      { id },
      updateLoadCapacityDto,
    );
  }

  remove(id: string) {
    return this.loadCapacityRepository.deleteOne(id);
  }
}
