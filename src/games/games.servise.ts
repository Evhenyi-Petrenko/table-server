import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Game, GameDocument } from './schemas/game.shemas';
import { CreateGameDto } from './dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game.name) private gameModel: Model<GameDocument>) {}

  async getAll(): Promise<Game[]> {
    return this.gameModel.find().exec();
  }
  async getById(id: string): Promise<Game> {
    return this.gameModel.findById(id);
  }
  async get(query): Promise<Game[]> {
    console.log(query);
    return this.gameModel.find(query).exec();
  }
  async create(gameDto: CreateGameDto): Promise<Game> {
    const newGame = new this.gameModel(gameDto);
    return newGame.save();
  }
  async remove(id: string): Promise<Game> {
    return this.gameModel.findByIdAndDelete(id);
  }
  // async update(id: string, gameDto: UpdateGameDto): Promise<Game> {
  //   return this.gameModel.findByIdAndUpdate(id, gameDto,{new:true})
  // }
}
