import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { DeliveryStep, DeliveryStepSchema } from './delivery-step.entity';

@Schema({ timestamps: true })
export class DeliveryRoute {
  @Prop({ type: String })
  driverId: string;

  @Prop({ type: String })
  vehicleId: string;

  @Prop({ type: Number })
  service: number;

  @Prop({ type: String })
  status: string;

  @Prop()
  steps: [DeliveryStep];
}

export const DeliveryRouteSchema = SchemaFactory.createForClass(DeliveryRoute);
