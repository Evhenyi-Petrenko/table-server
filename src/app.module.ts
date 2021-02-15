import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GameModule } from './games/games.module';
import { QuestionModule } from './question/question.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/tabletopgame'),
    GameModule,
    QuestionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
