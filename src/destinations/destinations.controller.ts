import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { CreateDestinationInputDto } from './dto/create-destination-input.dto';
import { UpdateDestinationInputDto } from './dto/update-destination-input.dto';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Post()
  create(@Body() createDestinationDto: CreateDestinationInputDto) {
    return this.destinationsService.create(
      createDestinationDto.latitude,
      createDestinationDto.longitude,
    );
  }

  @Get()
  findAll() {
    return this.destinationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.destinationsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationInputDto,
  ) {
    return this.destinationsService.update(+id, updateDestinationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.destinationsService.remove(+id);
  }
}
