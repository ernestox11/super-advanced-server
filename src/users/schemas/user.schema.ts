import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, unique: true })
  userId: string;

  //   @Prop()
  //   name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Number })
  age: number;

  //   @Prop([String])
  //   address: string[];
}

export const UserSchema = SchemaFactory.createForClass(User);
