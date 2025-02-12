import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitysService } from './citys.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('citys')
export class CitysController {
  constructor(private readonly citysService: CitysService) {}

  @Post()
  create(@Body() createCityDto: CreateCityDto) {
    return this.citysService.create(createCityDto);
  }

  @Get()
  findAll() {
    return this.citysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return this.citysService.update(+id, updateCityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citysService.remove(+id);
  }
}
