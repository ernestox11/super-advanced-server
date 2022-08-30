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

  findByIdById(id: string) {
    return this.loadCapacityRepository.findById(id);
  }

  update(id: string, updateLoadCapacityDto: UpdateLoadCapacityDto) {
    return this.loadCapacityRepository.findByIdAndUpdate(
      id,
      updateLoadCapacityDto,
    );
  }

  remove(id: string) {
    return this.loadCapacityRepository.deleteOne(id);
  }
}
