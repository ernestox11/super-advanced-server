import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Location {
  @Prop({ type: Number })
  latitude: number;

  @Prop({ type: Number })
  longitude: number;
}

export const LocationScehma = SchemaFactory.createForClass(Location);
