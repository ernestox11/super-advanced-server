import { Module } from '@nestjs/common';
import { DeliveryRoutesService } from './delivery-routes.service';
import { DeliveryRoutesController } from './delivery-routes.controller';
import {
  DeliveryRoute,
  DeliveryRouteSchema,
} from './entities/delivery-route.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryRoutesRepository } from './delivery-routes.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: DeliveryRoute.name, schema: DeliveryRouteSchema },
    ]),
  ],
  controllers: [DeliveryRoutesController],
  providers: [DeliveryRoutesService, DeliveryRoutesRepository],
})
export class DeliveryRoutesModule {}
