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

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    UsersModule,
    ClientsModule,
    ProductsModule,
    OrdersModule,
    DeliveryRoutesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
