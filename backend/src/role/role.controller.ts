import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleCreateDto } from './dto/create.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  async createRole (@Body() dto: RoleCreateDto) {
    return this.roleService.createRole(dto)
  }

  @Get()
  async getAllRoles () {
    return this.roleService.getAllRoles()
  }

  @Delete(":id")
  async deleteRole (@Param('id') id: string) {
    return this.roleService.deleteRole(id)
  }
}
