import { Module } from '@nestjs/common';
import { LoadCapacitiesService } from './load-capacities.service';
import { LoadCapacitiesController } from './load-capacities.controller';
import { LoadCapacitiesRepository } from './load-capacities.repository';
import {
  LoadCapacity,
  LoadCapaticySchema,
} from './entities/load-capacity.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LoadCapacity.name, schema: LoadCapaticySchema },
    ]),
  ],
  controllers: [LoadCapacitiesController],
  providers: [LoadCapacitiesService, LoadCapacitiesRepository],
})
export class LoadCapacitiesModule {}
