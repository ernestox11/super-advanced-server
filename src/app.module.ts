import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './main/users/users.module';
import { ClientsModule } from './main/clients/clients.module';
import { ProductsModule } from './main/products/products.module';
import { OrdersModule } from './main/orders/orders.module';
import { DeliveryRoutesModule } from './main/delivery-routes/delivery-routes.module';
import { TravelLogsModule } from './main/travel-logs/travel-logs.module';
import { VehiclesModule } from './main/vehicles/vehicles.module';
import { VehicleModelsModule } from './main/vehicle-models/vehicle-models.module';
import { LoadCapacitiesModule } from './main/load-capacities/load-capacities.module';
import { AuthModule } from './auth/auth.module';
import { DistanceModule } from './main/distance/distance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    UsersModule,
    ClientsModule,
    ProductsModule,
    OrdersModule,
    DeliveryRoutesModule,
    TravelLogsModule,
    VehiclesModule,
    VehicleModelsModule,
    LoadCapacitiesModule,
    AuthModule,
    DistanceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
