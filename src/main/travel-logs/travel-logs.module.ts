import { Module } from '@nestjs/common';
import { TravelLogsService } from './travel-logs.service';
import { TravelLogsController } from './travel-logs.controller';

@Module({
  controllers: [TravelLogsController],
  providers: [TravelLogsService],
})
export class TravelLogsModule {}
