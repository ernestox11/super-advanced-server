import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, unique: true, required: true })
  userId: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: String, unique: true, required: true })
  userName: string;

  @Prop({ type: String, required: true })
  password: string;

  @Prop({ type: Boolean })
  isActive: boolean;

  @Prop({ type: String })
  branchOffice: string;

  @Prop({ type: String })
  accessLevel: string;

  @Prop({ type: String })
  nationality: string;

  @Prop({ type: String, unique: true })
  idNumber: number;

  @Prop({ type: [Number] })
  phoneNumber: [number];

  @Prop({ type: String })
  driverLicenseStatus?: string;

  @Prop({ type: String })
  designatedVehicleId?: string;

  @Prop({ type: String })
  vehicleModel?: string;

  @Prop({ type: Number })
  vehicleVolume?: number;

  @Prop({ type: Number })
  vehicleWeight?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
