import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFiles, UseInterceptors, Patch, Req} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductCreateDto, ProductUpdateCountDto, ProductUpdateDto } from './dto/create.dto';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct (@Body() dto: ProductCreateDto ) {
    return this.productService.createProduct(dto)
  } 

  @Get()
  async getAllProduct (@Req() request: Request) {
    const authHeader = request.headers['authorization'];

    const token = authHeader?.startsWith('Bearer ')
      ? authHeader.slice(7)
      : undefined;

    return this.productService.getAllProduct(token)
  }

  @Post('/upload')
  @UseInterceptors(FilesInterceptor('photos'))
  async uploadPhotos (@Body() productId: any, @UploadedFiles() photos: Array<Express.Multer.File>) {
    return this.productService.uploadPhotos(photos, productId.productId)
  }  

  @Patch('/:id')
  async updateProduct (@Param("id") productId: string, @Body() dto: ProductUpdateDto ) {
    return this.productService.updateProduct(productId, dto)
  } 


  @Patch('/count/:id')
  async updateProductCount (@Param("id") productId: string, @Body() count: ProductUpdateCountDto ) {
    return this.productService.updateProductCount(productId, count)
  } 

  @Delete(':id') 
  async deleteOne (@Param("id") id: string) {
    return this.productService.deleteOne(id)
  }
}

