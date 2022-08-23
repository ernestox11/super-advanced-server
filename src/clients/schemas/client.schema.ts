import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
  ReceptionPoint,
  ReceptionPointSchema,
} from '../../common/schemas/receptionPoint.schema';

@Schema({ timestamps: true })
export class Client {
  @Prop({ type: String })
  clientName: string;

  @Prop({ type: String, unique: true })
  email: string;

  @Prop({ type: [ReceptionPointSchema] })
  receptionPoints: [ReceptionPoint];

  @Prop({ type: [Number] })
  phoneNumber: number[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
