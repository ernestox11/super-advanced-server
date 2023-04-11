import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DistanceService } from './distance.service';
import { CreateDistanceDto } from './dto/create-distance.dto';
import { UpdateDistanceDto } from './dto/update-distance.dto';

@Controller('distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @Post()
  create(@Body() createDistanceDto: CreateDistanceDto) {
    return this.distanceService.create(createDistanceDto);
  }

  @Get()
  findAll() {
    return this.distanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distanceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistanceDto: UpdateDistanceDto) {
    return this.distanceService.update(+id, updateDistanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distanceService.remove(+id);
  }
}
