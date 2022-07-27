import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, unique: true })
  userId: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: Number })
  age: number;

  @Prop({ type: [Number] })
  phoneNumbers: [number];

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  job: string;

  // Driver specific parameters
  @Prop({ type: String })
  driverLicenseStatus?: string;

  @Prop({ type: String })
  designatedVehicleId?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
