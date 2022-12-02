import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.entity';

@Schema({ timestamps: true })
export class Driver extends User {
  // Driver specific parameters
  @Prop({ type: String })
  driverLicenseStatus: string;

  @Prop({ type: String })
  designatedVehicleId: string;

  @Prop({ type: String })
  vehicleModel: string;

  @Prop({ type: Number })
  vehicleVolume: number;

  @Prop({ type: Number })
  vehicleWeight: number;
}

export const DriverSchema = SchemaFactory.createForClass(User);
