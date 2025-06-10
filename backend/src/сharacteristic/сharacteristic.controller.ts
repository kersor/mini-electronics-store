import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { СharacteristicService } from './сharacteristic.service';
import { CharacteristicCreateDto } from './dto/create.dto';
import { CharacteristicUpdateDto } from './dto/update.dto';

@Controller('characteristic')
export class СharacteristicController {
  constructor(private readonly сharacteristicService: СharacteristicService) {}

  @Post()
  async createCharacteristic (@Body() dto: CharacteristicCreateDto) {
    return this.сharacteristicService.createCharacteristic(dto)
  }

  @Get()
  async getAllCharacteristic () {
    return this.сharacteristicService.getAllCharacteristic()
  }

  @Get(":id")
  async getOneCharacteristic (@Param("id") id: string) {
    return this.сharacteristicService.getOneCharacteristic(id)
  }

  @Delete(":id")
  async deleteOneCharacteristic (@Param("id") id: string) {
    return this.сharacteristicService.deleteOneCharacteristic(id)
  }

  @Put(":id")
  async updtaeCategory (@Body() dto: CharacteristicUpdateDto, @Param("id") id: string) {
    return this.сharacteristicService.updtaeCharacteristic(dto, id)
  }

}