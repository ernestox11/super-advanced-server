import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DestinationDocument = Destination & Document;

@Schema()
export class Destination {
  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
