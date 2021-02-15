import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.shemas';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}
  async getAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }

  async create(questionDto: CreateQuestionDto): Promise<Question> {
    const newQuestion = new this.questionModel(questionDto);
    return newQuestion.save();
  }

  async update(id: string, questionDto: UpdateQuestionDto): Promise<Question> {
    return this.questionModel.findByIdAndUpdate(id, questionDto, { new: true });
  }

  async remove(id: string): Promise<Question> {
    return this.questionModel.findByIdAndDelete(id);
  }
}
