import { Module } from '@nestjs/common';
import { DeliveryRoutesService } from './delivery-routes.service';
import { DeliveryRoutesController } from './delivery-routes.controller';

@Module({
  controllers: [DeliveryRoutesController],
  providers: [DeliveryRoutesService],
})
export class DeliveryRoutesModule {}
