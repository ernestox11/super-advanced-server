import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ type: String })
  vehicleId: string;

  @Prop({ type: String })
  status: string;

  @Prop({ type: String })
  branchOfficeId: string;
}

export const ClientSchema = SchemaFactory.createForClass(Vehicle);
