import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Distance {
  @Prop({ type: Number })
  latitude1: number;

  @Prop({ type: Number })
  longitude1: number;

  @Prop({ type: Number })
  latitude2: number;

  @Prop({ type: Number })
  longitude2: number;
}

export const AddressScehma = SchemaFactory.createForClass(Distance);
