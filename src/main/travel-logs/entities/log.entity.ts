import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Log {
  @Prop({ type: String })
  orderID: string;

  @Prop({ type: String })
  taskId: string;

  @Prop({ type: Number })
  departureDate: number;

  @Prop({ type: Number })
  arrivalDate: number;

  @Prop({ type: Number })
  travelTime: number;

  @Prop({ type: Number })
  deliveryTime: number;
}

export const LogSchema = SchemaFactory.createForClass(Log);
