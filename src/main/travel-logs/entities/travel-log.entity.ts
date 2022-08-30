import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Log, LogSchema } from './log.entity';

@Schema({ timestamps: true })
export class TravelLog {
  @Prop({ type: String })
  originId: string;

  @Prop({ type: String })
  destinationId: string;

  @Prop({ type: Number })
  estimatedTravelTime: number;

  @Prop({ type: Number })
  estimatedDeliveryTime: number;

  @Prop({ type: [LogSchema] })
  log: [Log];
}

export const TravelLogSchema = SchemaFactory.createForClass(TravelLog);
