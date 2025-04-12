import { Injectable } from '@nestjs/common';
import { UserCreateDto } from './dto/create.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor (readonly prisma: PrismaService) {}

    async foundUserWithEmail (email: string) {
        const found = await this.prisma.user.findFirst({where: {email: email}})
        return found
    }
}
