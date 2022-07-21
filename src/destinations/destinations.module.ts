import { Module } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';
import { DestinationsRepository } from './destinations.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Destination, DestinationSchema } from './schemas/destination.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Destination.name, schema: DestinationSchema },
    ]),
  ],
  controllers: [DestinationsController],
  providers: [DestinationsService, DestinationsRepository],
})
export class DestinationsModule {}
