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
import { ParseMongoIdPipe } from '../../common/pipes/parse-mongo-id.pipe';

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
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.loadCapacitiesService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateLoadCapacityDto: UpdateLoadCapacityDto,
  ) {
    return this.loadCapacitiesService.update(id, updateLoadCapacityDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.loadCapacitiesService.remove(id);
  }
}
