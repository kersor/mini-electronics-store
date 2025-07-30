import { Body, Controller, Delete, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesCreateDto } from './dto/create.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { Bearer } from 'src/utils/bearer';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) { }

  @UseGuards(AuthGuard)
  @Post()
  async sendFavoritesProuduct(@Body() dto: FavoritesCreateDto, @Bearer() token: string) {
    return this.favoritesService.sendFavoritesProuduct(dto, token)
  }

  @UseGuards(AuthGuard)
  @Delete()
  async removeFavoritesProuduct(@Body() dto: FavoritesCreateDto, @Bearer() token: string) {
    return this.favoritesService.removeFavoritesProuduct(dto, token)
  }

  @UseGuards(AuthGuard)
  @Get()
  async getFavorites (@Bearer() token: string) {
    return this.favoritesService.getFavorites(token)
  }
}
 