import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor (
        readonly prisma: PrismaService,
        readonly userService: UserService
    ) {}

    async register (dto: RegisterDto) {
        const check = await this.userService.foundUserWithEmail(dto.email)

        if (check)  throw new HttpException("Пользователь с такой почтой найден", HttpStatus.BAD_REQUEST)
        const hash = bcrypt.hashSync(dto.password, 11)

        const user = await this.prisma.user.create({
            data: {
                ...dto,
                password: hash
            }
        })

        return user
    }  

    async login (dto: LoginDto) {
        const check = await this.userService.foundUserWithEmail(dto.email)

        if (!check) throw new HttpException("Неверная почта или пароль", HttpStatus.BAD_REQUEST)
        const hash = bcrypt.compareSync(dto.password, check.password)
        if (!hash) throw new HttpException("Неверная почта или пароль", HttpStatus.BAD_REQUEST)


        return true
    }  
}
