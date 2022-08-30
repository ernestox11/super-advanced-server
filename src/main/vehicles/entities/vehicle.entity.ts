import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { LoadCapacity } from '../../load-capacities/entities/load-capacity.entity';
import { VehicleModel } from '../../vehicle-models/entities/vehicle-model.entity';

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ type: String })
  status: string;

  @Prop({ type: String })
  branchOfficeId: string;

  @Prop()
  capacity: LoadCapacity;

  @Prop()
  model: VehicleModel;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
