import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  Query,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { GamesService } from './games.servise';
import { Game } from './schemas/game.shemas';
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService) {}
  @Get()
  getAll() {
    return this.gameService.getAll();
  }

  @Get('search')
  search(@Query() query) {
    return this.gameService.get(query);
  }
  @Get(':id')
  getOne(@Param('id') id: string): Promise<Game> {
    return this.gameService.getById(id);
  }
  @Post()
  @HttpCode(201)
  create(@Body() gameData: CreateGameDto) {
    return this.gameService.create(gameData);
  }
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.gameService.remove(id);
  // }
}
