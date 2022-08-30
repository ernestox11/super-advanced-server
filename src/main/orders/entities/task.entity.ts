import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Task {
  @Prop()
  productID: string;

  @Prop()
  quantity: number;

  @Prop()
  deliveredQuantity: number;

  @Prop()
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
