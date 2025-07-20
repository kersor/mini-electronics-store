import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { PhotosService } from 'src/photos/photos.service';
import { PhotosModule } from 'src/photos/photos.module';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, PhotosService],
})
export class ProductModule {}
