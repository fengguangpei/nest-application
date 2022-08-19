import {
  Body,
  Controller,
  Post,
  Query,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateCat } from '../dtos/create-cat.dto';
import { ListAllEntities } from '../dtos/list-all-entities.dto';
import { UpdateCat } from '../dtos/update-cat.dto';
import { CatService } from '../services/cat.service';
import { Cat } from '../interfaces/cat.interface';
@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  // 新建
  @Post()
  create(@Body() createCat: CreateCat) {
    this.catService.create(createCat);
  }
  // 查询
  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Cat[]> {
    return this.catService.findAll(query);
  }
  // 查询
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action return a ${id} cat`;
  }
  // 更新
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCat: UpdateCat) {
    return `this action update a ${id} cat`;
  }
  // 删除
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action delete a ${id} cat`;
  }
}
