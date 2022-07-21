import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DestinationsModule } from './destinations/destinations.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017'),
    UsersModule,
    DestinationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
