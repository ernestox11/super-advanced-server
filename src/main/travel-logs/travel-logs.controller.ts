import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TravelLogsService } from './travel-logs.service';
import { CreateTravelLogDto } from './dto/create-travel-log.dto';
import { UpdateTravelLogDto } from './dto/update-travel-log.dto';

@Controller('travel-logs')
export class TravelLogsController {
  constructor(private readonly travelLogsService: TravelLogsService) {}

  @Post()
  create(@Body() createTravelLogDto: CreateTravelLogDto) {
    return this.travelLogsService.create(createTravelLogDto);
  }

  @Get()
  findAll() {
    return this.travelLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.travelLogsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTravelLogDto: UpdateTravelLogDto,
  ) {
    return this.travelLogsService.update(+id, updateTravelLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.travelLogsService.remove(+id);
  }
}
