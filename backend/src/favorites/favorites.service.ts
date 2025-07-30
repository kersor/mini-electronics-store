import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { FavoritesCreateDto } from './dto/create.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class FavoritesService {
    constructor(
        readonly prisma: PrismaService,
        readonly authService: AuthService
    ) {}

    async sendFavoritesProuduct (dto: FavoritesCreateDto, token: string) {
        const user = await this.authService.verifyToken(token)
        
        const favorite = await this.prisma.favorite.findFirst({where: {userId: user.id}})
        if (!favorite) throw new HttpException("Не найдена корзина", HttpStatus.BAD_REQUEST)

        const favorites = await this.prisma.favoritesProduct.create({
            data: {
              product: {
                connect: {
                    id: dto.productId
                }
              },
              favorite: {
                connect: {
                    id: favorite.id
                }
              }
            },            
        })
        
        return favorites
    
    }

    async removeFavoritesProuduct (dto: FavoritesCreateDto, token: string) {
        const user = await this.authService.verifyToken(token)
        
        const favorite = await this.prisma.favorite.findFirst({where: {userId: user.id}})
        if (!favorite) throw new HttpException("Не найдена корзина", HttpStatus.BAD_REQUEST)

        const favorites = await this.prisma.favoritesProduct.delete({
            where: {
                favoriteId_productId: {
                    favoriteId: +favorite.id,
                    productId: +dto.productId
                }   
            }
        })
        
        return favorites
    
    }

    async getFavorites (token: string) {
        const user = await this.authService.verifyToken(token)

        const favorite = await this.prisma.favorite.findFirst({where: {userId: user.id}})
        if (!favorite) throw new HttpException("Не найдена корзина", HttpStatus.BAD_REQUEST)

        const data = await this.prisma.favoritesProduct.findMany({
            where: {
                favoriteId: favorite.id
            },
            select: {
                product: true
            }
        })

         return data.map((item: any) => item.product)
    }
}


