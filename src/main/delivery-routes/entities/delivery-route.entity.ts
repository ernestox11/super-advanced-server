import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DeliveryStep, DeliveryStepSchema } from './delivery-step.entity';

@Schema({ timestamps: true })
export class DeliveryRoute {
  @Prop({ type: String })
  driverId: string;

  @Prop({ type: String })
  service: string;

  @Prop({ type: String })
  status: string;

  @Prop()
  steps: [DeliveryStep];
}

export const DeliveryRouteSchema = SchemaFactory.createForClass(DeliveryRoute);
