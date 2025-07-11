import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateDto, ProductUpdateCountDto } from './dto/create.dto';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct (@Body() dto: ProductCreateDto ) {
    return this.productService.createProduct(dto)
  } 

  @Get()
  async getAllProduct () {
    return this.productService.getAllProduct()
  }

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('photos'))
  async uploadPhotos (@Body() productId: any, @UploadedFiles() photos: Array<Express.Multer.File>) {
    return this.productService.uploadPhotos(photos, productId.productId)
  } 

  @Put('/count/:productId')
  async updateProductCount (@Param("productId") productId: string, @Body() count: ProductUpdateCountDto ) {
    return this.productService.updateProductCount(productId, count)
  } 

  @Delete(':id') 
  async deleteOne (@Param("id") id: string) {
    return this.productService.deleteOne(id)
  }
}

