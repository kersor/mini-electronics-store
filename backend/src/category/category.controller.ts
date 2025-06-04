import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryCreateDto } from './dto/create.dto';
import { CategoryUpdateDto } from './dto/updtae.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory (@Body() dto: CategoryCreateDto) {
    return this.categoryService.createCategory(dto)
  }

  @Get()
  async getAllCategory () {
    return this.categoryService.getAllCategory()
  }

  @Put(":id")
  async updtaeCategory (@Body() dto: CategoryUpdateDto, @Param("id") id: string) {
    return this.categoryService.updtaeCategory(dto, id)
  }

  @Get(":id")
  async getOneCategory (@Param("id") id: string) {
    return this.categoryService.getOneCategory(id)
  }

  @Delete(":id")
  async deleteOneCategory (@Param("id") id: string) {
    return this.categoryService.deleteOneCategory(id) 
  }
}
