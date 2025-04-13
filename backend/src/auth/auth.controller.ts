import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async register (@Body() dto: RegisterDto, @Res() res: Response) {
    console.log(1)
    const data = await this.authService.register(dto)
    const access_token = data.access_token;

    res.cookie("access_token", access_token)

    return res.json(data)
  }

  @Post('/login')
  async login (@Body() dto: LoginDto, @Res() res: Response) {
    const data = await this.authService.login(dto)
    const access_token = data.access_token;

    res.cookie("access_token", access_token)

    return res.json(data)
  }
}
