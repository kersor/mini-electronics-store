import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/create.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

}
