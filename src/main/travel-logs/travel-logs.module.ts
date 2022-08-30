import { Module } from '@nestjs/common';
import { TravelLogsService } from './travel-logs.service';
import { TravelLogsController } from './travel-logs.controller';
import { TravelLog, TravelLogSchema } from './entities/travel-log.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { TravelLogsRepository } from './travel-logs.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TravelLog.name, schema: TravelLogSchema },
    ]),
  ],
  controllers: [TravelLogsController],
  providers: [TravelLogsService, TravelLogsRepository],
})
export class TravelLogsModule {}
