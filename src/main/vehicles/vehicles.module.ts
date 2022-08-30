import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { VehiclesRepository } from './vehicles.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Vehicle, VehicleSchema } from './entities/vehicle.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vehicle.name, schema: VehicleSchema }]),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehiclesRepository],
})
export class VehiclesModule {}
