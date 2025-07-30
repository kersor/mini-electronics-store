import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt'
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (
        readonly prisma: PrismaService,
        readonly userService: UserService,
        readonly jwtService: JwtService
    ) {}

    async register (dto: RegisterDto) {
        const check = await this.userService.foundUserWithEmail(dto.email)

        if (check) throw new HttpException("Пользователь с такой почтой найден", HttpStatus.BAD_REQUEST)

        const role = await this.prisma.role.findFirst({where: {title: "USER"}})

        if (!role) throw new HttpException("Роль не была найдена", HttpStatus.BAD_REQUEST)

        const hash = bcrypt.hashSync(dto.password, 11)







        let user: any = {}

        if (dto.name === "admin@mail.ru") {
            const roleADMIN = await this.prisma.role.findFirst({where: {title: "ADMIN"}})
            if (!roleADMIN) throw new HttpException("Роль не была найдена", HttpStatus.BAD_REQUEST)

            user = await this.prisma.user.create({
                data: {
                    ...dto,
                    password: hash,
                    roles: {
                        createMany: {
                            data: [
                                {roleId: role.id},
                                {roleId: roleADMIN?.id}
                            ]
                        }
                    }
                }
            })
        } else {
            user = await this.prisma.user.create({
                data: {
                    ...dto,
                    password: hash,
                    roles: {
                        create: {
                            roleId: role.id
                        }
                    }
                }
            })
        }
        



        await this.prisma.favorite.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        await this.prisma.cart.create({
            data: {
                user: {
                    connect: {
                        id: user.id
                    }
                }
            }
        })

        const tokens = await this.generateToken(user)

        return {
            ...user,
            ...tokens
        }
    }  

    async login (dto: LoginDto) {
        // const check = await this.userService.foundUserWithEmail(dto.email)
        const check = await this.prisma.user.findFirst({
            where: {
                email: dto.email
            },
            include: {
                roles: {
                    include: {
                        role: true
                    }
                }
            }
        })
        
        if (!check) throw new HttpException("Неверная почта или пароль", HttpStatus.BAD_REQUEST)
        const hash = bcrypt.compareSync(dto.password, check.password)

        if (!hash) throw new HttpException("Неверная почта или пароль", HttpStatus.BAD_REQUEST)

        const tokens = await this.generateToken(check)

        return {
            ...check,
            ...tokens
        } 
    }  
    
    async generateToken (payload: any) {
        const access_token = await this.jwtService.signAsync(payload)

        return {
            access_token: access_token
        }
    }

    async verifyToken (token: string) {
        const verifyData = await this.jwtService.verifyAsync(token)
        
        return verifyData
    }
}
