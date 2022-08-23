import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
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

export const AddressScehma = SchemaFactory.createForClass(Address);
