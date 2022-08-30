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
import { ParseMongoIdPipe } from '../../common/pipes/parse-mongo-id.pipe';

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
  findById(@Param('id', ParseMongoIdPipe) id: string) {
    return this.travelLogsService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateTravelLogDto: UpdateTravelLogDto,
  ) {
    return this.travelLogsService.update(id, updateTravelLogDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.travelLogsService.remove(id);
  }
}
