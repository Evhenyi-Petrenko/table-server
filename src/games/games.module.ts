import { Module } from '@nestjs/common';
import { GamesService } from './games.servise';
import { GamesController } from './games.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from './schemas/game.shemas';
@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [
    MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }]),
  ],
})
export class GameModule {}
