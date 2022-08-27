import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.entity';

@Schema({ timestamps: true })
export class Driver extends User {
  // Driver specific parameters
  @Prop({ type: String })
  driverLicenseStatus: string;

  @Prop({ type: String })
  designatedVehicleId: string;
}

export const DriverSchema = SchemaFactory.createForClass(User);
