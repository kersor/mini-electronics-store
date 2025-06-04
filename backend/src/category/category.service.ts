import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CategoryCreateDto } from './dto/create.dto';
import { CategoryUpdateDto } from './dto/updtae.dto';

@Injectable()
export class CategoryService {
    constructor(
        readonly prisma: PrismaService
    ) {}

    async createCategory (dto: CategoryCreateDto) {
        const check = await this.prisma.category.findFirst({where: {name: dto.name}})

        if (check) throw new HttpException("Такая категория уже существует", HttpStatus.BAD_REQUEST)
        
        await this.prisma.category.create({
            data: {
                ...dto
            }
        })
    } 

    async updtaeCategory (dto: CategoryUpdateDto, id: string) {
        const result = await this.prisma.category.update({
            where: {id: +id},
            data: dto
        })

        return result
    }

    async getAllCategory () {
        const categories = await this.prisma.category.findMany()
        return categories
    }

    async getOneCategory (id: string) {
        const category = await this.prisma.category.findUnique({where: {id: +id}})
        return category
    }

    async deleteOneCategory (id: string) {
        await this.prisma.category.delete({where: {id: +id}})
    }
}
