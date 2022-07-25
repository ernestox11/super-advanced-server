import { Injectable } from '@nestjs/common';
import { CreateDestinationInputDto } from './dto/create-destination-input.dto';
import { UpdateDestinationInputDto } from './dto/update-destination-input.dto';
import { DestinationsRepository } from './destinations.repository';
import { Destination } from './schemas/destination.schema';

@Injectable()
export class DestinationsService {
  constructor(
    private readonly destinationsRepository: DestinationsRepository,
  ) {}

  async create(
    latitude: number,
    longitude: number /*createDestinationDto: CreateDestinationInputDto*/,
  ): Promise<Destination> {
    return this.destinationsRepository.create({
      latitude,
      longitude,
    });
  }

  findAll() {
    return this.destinationsRepository.find({});
    // return `This action returns all destinations`;
  }

  findOne(id: string) {
    return this.destinationsRepository.findOne({ id });
    // return `This action returns a #${id} destination`;
  }

  update(id: number, updateDestinationDto: UpdateDestinationInputDto) {
    return `This action updates a #${id} destination`;
  }

  remove(id: number) {
    return `This action removes a #${id} destination`;
  }
}
