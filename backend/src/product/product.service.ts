import { Injectable, UploadedFiles } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ProductCreateDto, ProductUpdateCountDto, ProductUpdateDto } from './dto/create.dto';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { PhotosService } from 'src/photos/photos.service';
import { Request } from 'express';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ProductService {
    constructor (
        readonly prisma: PrismaService,
        readonly photosService: PhotosService,
        readonly authService: AuthService
    ) {}

    async createProduct (dto: ProductCreateDto) {
        const product = await this.prisma.product.create({
            data: {
                title: dto.name, 
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

        if (!!dto.photos?.length) {
            await this.photosService.createPhotosProduct({productId: product.id, photos: dto.photos})

            const productUpdate = this.prisma.product.findFirst({
                where: {
                    id: product.id,
                },
                include: {
                    photos: {
                        select: {
                            photo: true
                        }
                    }
                }
            })

            console.log(productUpdate)
            return productUpdate
        }

        return product
    }

    async updateProduct (productId: string, dto: ProductUpdateDto) {
        const { categoryId, photos, count, name, ...rest } = dto;
        const product = await this.prisma.product.update({
            where: {
                id: +productId
            },
            data: {
                title: name,
                
                ...rest,
            }
        }) 

        if (!!dto.photos?.length) {
            await this.prisma.photos.deleteMany({where: {productId: +productId}})
            await this.photosService.createPhotosProduct({productId: product.id, photos: dto.photos})
        }

        return product
    }
 
    async getAllProduct (token: string | undefined) {
        let user: any = {}

        if (token) {
            user = await this.authService.verifyToken(token)
        } else {
            user = null
        }
        

        let favoriteIds: number[] = [];

        if (user) {
            const favorite = await this.prisma.favorite.findFirst({
                where: { userId: user.id },
                include: {
                    products: {
                        select: { productId: true },
                    },
                },
            });

            favoriteIds = favorite?.products.map(p => p.productId) || [];
        }

        const products = await this.prisma.product.findMany({
            include: {
                photos: true,
                category: true,
            },
        });

        return products.map(product => ({
            ...product,
            isFavorite: favoriteIds.includes(product.id),
        }));

    }

    async uploadPhotos (@UploadedFiles() photos: Array<Express.Multer.File>, productId: string) {
        const photosArray: any[] = []
        photos.map((photo: Express.Multer.File) => {
            const fileName = uuidv4() + '.jpg'
            const filePath = path.resolve(__dirname, '..', 'static', fileName)

            const pathFolder = path.join(__dirname, '..', 'static');
            if (!existsSync(pathFolder)) {
                mkdirSync(pathFolder, { recursive: true });
            }

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
        console.log(1)
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
 