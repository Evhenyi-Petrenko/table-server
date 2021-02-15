import { Module } from '@nestjs/common';
import { QuestionService } from './question.servise';
import { QuestionController } from './question.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Question, QuestionSchema } from './schemas/question.shemas';
@Module({
  providers: [QuestionService],
  controllers: [QuestionController],
  imports: [
    MongooseModule.forFeature([
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
})
export class QuestionModule {}
