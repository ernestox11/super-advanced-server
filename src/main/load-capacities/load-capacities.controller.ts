import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoadCapacitiesService } from './load-capacities.service';
import { CreateLoadCapacityDto } from './dto/create-load-capacity.dto';
import { UpdateLoadCapacityDto } from './dto/update-load-capacity.dto';

@Controller('load-capacities')
export class LoadCapacitiesController {
  constructor(private readonly loadCapacitiesService: LoadCapacitiesService) {}

  @Post()
  create(@Body() createLoadCapacityDto: CreateLoadCapacityDto) {
    return this.loadCapacitiesService.create(createLoadCapacityDto);
  }

  @Get()
  findAll() {
    return this.loadCapacitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loadCapacitiesService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLoadCapacityDto: UpdateLoadCapacityDto,
  ) {
    return this.loadCapacitiesService.update(id, updateLoadCapacityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loadCapacitiesService.remove(id);
  }
}
