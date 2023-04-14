import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Location } from '../../../common/entities/location.entity';

@Schema()
export class DeliveryStep {
  @Prop({ type: String })
  originPointId: string;

  @Prop({ type: String })
  destinationPointId: string;

  @Prop({ type: String })
  destinationAddress: string;

  @Prop({ type: Number })
  arrivalDate?: number;

  @Prop({ type: String })
  travelTime: string;

  @Prop({ type: Number })
  totalNumberOfPackages: number;

  @Prop({ type: [] })
  tasks: [];
}

export const DeliveryStepSchema = SchemaFactory.createForClass(DeliveryStep);
