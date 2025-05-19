import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/create.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getAllUser () {
    return this.userService.getAllUsers()
  }

  @UseGuards(AuthGuard)
  @Get("/self")
  async self (@Req() request: Request) {
    const cookies = request.cookies

    if (cookies.access_token) {
      const token = cookies.access_token
      return this.userService.getUser(token)
    }
    else return null
  } 
}
