import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeliveryRoutesService } from './delivery-routes.service';
import { CreateDeliveryRouteDto } from './dto/create-delivery-route.dto';
import { UpdateDeliveryRouteDto } from './dto/update-delivery-route.dto';
import { ParseMongoIdPipe } from '../../common/pipes/parse-mongo-id.pipe';

@Controller('delivery-routes')
export class DeliveryRoutesController {
  constructor(private readonly deliveryRoutesService: DeliveryRoutesService) {}

  @Post()
  create(@Body() createDeliveryRouteDto: CreateDeliveryRouteDto) {
    return this.deliveryRoutesService.create(createDeliveryRouteDto);
  }

  @Get()
  findAll() {
    return this.deliveryRoutesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseMongoIdPipe) id: string) {
    return this.deliveryRoutesService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseMongoIdPipe) id: string,
    @Body() updateDeliveryRouteDto: UpdateDeliveryRouteDto,
  ) {
    return this.deliveryRoutesService.update(id, updateDeliveryRouteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe) id: string) {
    return this.deliveryRoutesService.remove(id);
  }
}
