import { SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.entity';
import { Location } from './location.entity';

export class ReceptionPoint {
  location: Location;
  receptionTimes: [[number, number]];
  address: Address;
}

export const ReceptionPointSchema =
  SchemaFactory.createForClass(ReceptionPoint);
