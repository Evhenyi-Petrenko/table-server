import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GameDocument = Game & Document;

@Schema()
export class Game {
  @Prop()
  name: string;
  @Prop()
  quantity: string;
  @Prop()
  goal: string;
  @Prop()
  separation: string;
  @Prop()
  ocupation: string;
  @Prop()
  time: string;
  @Prop()
  world: string;
}

export const GameSchema = SchemaFactory.createForClass(Game);
