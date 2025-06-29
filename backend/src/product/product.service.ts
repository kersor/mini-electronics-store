import { Injectable, UploadedFiles } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductCreateDto, ProductUpdateCountDto } from './dto/create.dto';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';

@Injectable()
export class ProductService {
    constructor (
        readonly prisma: PrismaService
    ) {}

    async createProduct (dto: ProductCreateDto) {
        const product = await this.prisma.product.create({
            data: {
                title: dto.title,
                description: dto.description,
                price: dto.price,
                category: {
                    connect: {
                        id: +dto.categoryId
                    }
                },
                count: {
                    create: {
                        count: dto.count ? dto.count : 0
                    }
                }
            }
        })

    }

    async getAllProduct () {
        const products = await this.prisma.product.findMany({
            include: {
                category: true,
                photos: true,
                rating: true,
                count: true,
            }
        })
        return products
    }

    async uploadPhotos (@UploadedFiles() photos: Array<Express.Multer.File>, productId: string) {
        const photosArray: any[] = []
        console.log(productId)
        photos.map((photo: Express.Multer.File) => {
            const fileName = uuidv4() + '.jpg'
            const filePath = path.resolve(__dirname, '..', 'static', fileName)

            const pathFolder = path.join(__dirname, '..', 'static');
            if (!existsSync(pathFolder)) {
                mkdirSync(pathFolder, { recursive: true });
            }

            console.log(pathFolder)
            writeFileSync(filePath, photo.buffer)

            photosArray.push({
                photo: fileName,
                productId: +productId
            })

        })
        
        await this.prisma.photos.createMany({
            data: photosArray,
            skipDuplicates: true
        })
    }

    async updateProductCount (productId: string, count: ProductUpdateCountDto ) {
        const product = await this.prisma.count.findFirst({where: {productId: +productId}})

        if (product) {
            await this.prisma.count.update({
                where: {productId: +productId},
                data: {
                    count: count.count
                }
            })
        }
    }

    async deleteOne (id: string) {
        await this.prisma.product.delete({where: {id: +id}})
    }
}
 