import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class VehicleModel {
  @Prop({ type: String })
  brand: string;

  @Prop({ type: String })
  modelName: string;

  @Prop({ type: Number })
  year: number;

  @Prop({ type: String })
  type: string;
}
export const VehicleModelSchema = SchemaFactory.createForClass(VehicleModel);
