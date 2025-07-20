import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PhotosProductCreateDto } from './dto/create.dto';

@Injectable()
export class PhotosService {
    constructor (
        readonly prisma: PrismaService
    ) {}

    async createPhotosProduct (dto: PhotosProductCreateDto) {
        const req = dto.photos.map((photo: string) => {
            return {
                productId: dto.productId,
                photo: photo
            }
        })
        const sendPhotos = await this.prisma.photos.createMany({
            data: req,
            
        })
        console.log(123, sendPhotos)
    }
}
