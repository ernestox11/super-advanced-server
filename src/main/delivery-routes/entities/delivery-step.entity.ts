import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Location } from '../../../common/entities/location.entity';

@Schema()
export class DeliveryStep {
  @Prop({ type: String })
  type: string;

  @Prop({ type: String })
  locationId: string;

  @Prop({ type: Location })
  location: Location;

  @Prop({ type: Number })
  arrivalDate?: number;

  @Prop({ type: Number })
  departureDate?: number;

  @Prop({ type: String })
  taskId?: string;

  @Prop({ type: String })
  taskStatus?: string;

  @Prop({ type: Number })
  deliveryTime?: number;
}

export const DeliveryStepSchema = SchemaFactory.createForClass(DeliveryStep);
