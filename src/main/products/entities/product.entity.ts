import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Product {
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  code: string;

  @Prop({ type: String })
  category: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  weight: number;

  @Prop({ type: Number })
  length: number;

  @Prop({ type: Number })
  width: number;

  @Prop({ type: Number })
  height: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
