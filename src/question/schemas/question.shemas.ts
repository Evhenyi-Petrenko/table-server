import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuestionDocument = Question & Document;

@Schema()
export class Question {
  @Prop()
  name: string;
  @Prop({ type: Object })
  answers: { [key: string]: string };
  @Prop()
  question: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
