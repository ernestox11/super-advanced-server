import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ReceptionPoint } from 'src/common/entities/receptionPoint.entity';

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
