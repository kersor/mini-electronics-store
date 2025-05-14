import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CharacteristicCreateDto } from './dto/create.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class СharacteristicService {
    constructor(
        private prisma: PrismaService
    ) {}

    async createCharacteristic (dto: CharacteristicCreateDto) {
        const checkCharacteristic = await this.prisma.characteristics.findUnique({
            where: {
                name: dto.name
            }
        })

        if (checkCharacteristic) {
            throw new HttpException("Такая характеристика уже существует", HttpStatus.BAD_REQUEST)
        }

        await this.prisma.characteristics.create({
            data: dto
        })
    }

    async getAllCharacteristic () {
        const characteristics = await this.prisma.characteristics.findMany()
        return characteristics
    }

    async getOneCharacteristic (id: string) {
        const characteristic = await this.prisma.characteristics.findFirst({
            where: {id: +id}
        })
        return characteristic
    }
}
