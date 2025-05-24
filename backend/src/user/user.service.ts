import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/create.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor (
        readonly prisma: PrismaService,
        readonly jwtService: JwtService
    ) {}

    async foundUserWithEmail (email: string) {
        const found = await this.prisma.user.findFirst({where: {email: email}})
        return found
    }

    async getAllUsers () {
        const users = await this.prisma.user.findMany()
        return users
    }

    async getUser (token: string) {
        const payload = await this.jwtService.verifyAsync(
          token,
          {
            secret: 'key'
          }
        );

        const { id } = payload

        const user = await this.prisma.user.findFirst({
            where: {
                id: id
            },
            include: {
                roles: {
                    include: {
                        role: true
                    }
                }
            }
        })

        return user
    }
}
