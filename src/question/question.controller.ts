import {
  Controller,
  Get,
  Post,
  HttpCode,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.servise';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}
  @Get()
  getAll() {
    return this.questionService.getAll();
  }
  @Post()
  @HttpCode(201)
  create(@Body() questionData: CreateQuestionDto) {
    return this.questionService.create(questionData);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() questionData: UpdateQuestionDto) {
    return this.questionService.update(id, questionData);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionService.remove(id);
  }
}
