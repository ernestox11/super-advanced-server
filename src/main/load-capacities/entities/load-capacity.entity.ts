import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class LoadCapacity {
  @Prop({ type: String })
  name: string;

  @Prop({ type: Number })
  volume: number;

  @Prop({ type: Number })
  weight: number;

  @Prop({ type: Number })
  length: number;

  @Prop({ type: Number })
  width: number;

  @Prop({ type: Number })
  height: number;
}

export const LoadCapaticySchema = SchemaFactory.createForClass(LoadCapacity);
