import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.entity';

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Number })
  orderNumber: number;

  @Prop({ type: String })
  clientId: string;

  @Prop({ type: String })
  clientName: string;

  @Prop({ type: String })
  branchOffice: string;

  @Prop({ type: String })
  receptionPointId: string;

  @Prop({ type: String })
  latitude: string;

  @Prop({ type: String })
  longitude: string;

  @Prop({ type: String })
  address: string;

  @Prop({ type: String })
  orderType: string;

  @Prop({ type: [TaskSchema] })
  tasks: [Task];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
