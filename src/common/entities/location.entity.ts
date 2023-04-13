import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Location {
  @Prop({ type: String })
  latitude: string;

  @Prop({ type: String })
  longitude: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
