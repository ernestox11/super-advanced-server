import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export class Location {
  @Prop({ type: Number })
  latitude: number;

  @Prop({ type: Number })
  longitude: number;
}

export class Address {
  @Prop({ type: String })
  state: string;

  @Prop({ type: String })
  city: string;

  @Prop({ type: String })
  streetAddress: string;

  @Prop({ type: Number })
  postalCode: number;
}

export class ReceptionPoint {
  location: Location;
  receptionTimes: [[number, number]];
  address: Address;
}

@Schema({ timestamps: true })
export class Client {
  @Prop({ type: String })
  clientName: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({})
  receptionPoints: [ReceptionPoint];

  @Prop({ type: [Number] })
  phoneNumber: number[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
