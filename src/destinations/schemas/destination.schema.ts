import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Destination {
  @Prop({ type: Number })
  latitude: number;

  @Prop({ type: Number })
  longitude: number;
}

export const DestinationSchema = SchemaFactory.createForClass(Destination);
