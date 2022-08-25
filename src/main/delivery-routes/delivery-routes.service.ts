import { Injectable } from '@nestjs/common';
import { CreateDeliveryRouteDto } from './dto/create-delivery-route.dto';
import { UpdateDeliveryRouteDto } from './dto/update-delivery-route.dto';

@Injectable()
export class DeliveryRoutesService {
  create(createDeliveryRouteDto: CreateDeliveryRouteDto) {
    return 'This action adds a new deliveryRoute';
  }

  findAll() {
    return `This action returns all deliveryRoutes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryRoute`;
  }

  update(id: number, updateDeliveryRouteDto: UpdateDeliveryRouteDto) {
    return `This action updates a #${id} deliveryRoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryRoute`;
  }
}
