import { SchemaFactory } from '@nestjs/mongoose';
import { Address } from './address.schema';
import { Location } from './location.schema';

export class ReceptionPoint {
  location: Location;
  receptionTimes: [[number, number]];
  address: Address;
}

export const ReceptionPointSchema =
  SchemaFactory.createForClass(ReceptionPoint);
