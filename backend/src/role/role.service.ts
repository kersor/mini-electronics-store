import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { RoleCreateDto } from './dto/create.dto';

@Injectable()
export class RoleService {
    constructor(
        readonly prisma: PrismaService
    ) {}

    async createRole (dto: RoleCreateDto) {
        const found = await this.foundRole(dto.title)

        if (found) throw new HttpException("Такая роль уже существует", HttpStatus.BAD_REQUEST)
        
        await this.prisma.role.create({
            data: dto
        })

        return {
            success: true
        }
    }

    async getAllRoles () {
        const roles = await this.prisma.role.findMany()
        return roles
    }

    async deleteRole (id: string) {
        const found = await this.prisma.role.findFirst({where: {id: +id}})

        if (found) {
            const delRoles = await this.prisma.role.delete({where: {id: +id}})
            return delRoles
        } else {
            throw new HttpException("Такой роли уже не существует", HttpStatus.BAD_REQUEST)
        }

    }

    async foundRole (title: string) {
        const found = await this.prisma.role.findFirst({where: {title: title}})
        return found
    }
}
