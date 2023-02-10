import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  productID: string;

  @Prop()
  productName: string;

  @Prop()
  quantity: number;

  @Prop()
  deliveredQuantity: number;

  @Prop()
  status: string;

  @Prop()
  volume: number;

  @Prop()
  weight: number;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
