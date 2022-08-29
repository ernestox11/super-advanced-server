import { Module } from '@nestjs/common';
import { VehicleModelsService } from './vehicle-models.service';
import { VehicleModelsController } from './vehicle-models.controller';
import { VehicleModelsRepository } from './vehicle-models.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  VehicleModel,
  VehicleModelSchema,
} from './entities/vehicle-model.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: VehicleModel.name, schema: VehicleModelSchema },
    ]),
  ],
  controllers: [VehicleModelsController],
  providers: [VehicleModelsService, VehicleModelsRepository],
})
export class VehicleModelsModule {}
