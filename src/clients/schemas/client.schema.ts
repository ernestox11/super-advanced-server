import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address } from 'src/common/schemas/address.schema';

@Schema({ timestamps: true })
export class Client {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String, unique: true })
  email: string;

  receptionPoint: [
    {
      location: Location;
      receptionTimes: [
        {
          start: number;
          finish: number;
        },
      ];
      address: Address;
    },
  ];
  phoneNumber: number[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
