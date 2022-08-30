import { Injectable } from '@nestjs/common';
import { DeliveryRoutesRepository } from './delivery-routes.repository';
import { CreateDeliveryRouteDto } from './dto/create-delivery-route.dto';
import { UpdateDeliveryRouteDto } from './dto/update-delivery-route.dto';
import { DeliveryRoute } from './entities/delivery-route.entity';

@Injectable()
export class DeliveryRoutesService {
  constructor(
    private readonly deliveryRouteRepository: DeliveryRoutesRepository,
  ) {}

  create(
    createDeliveryRouteDto: CreateDeliveryRouteDto,
  ): Promise<DeliveryRoute> {
    return this.deliveryRouteRepository.create(createDeliveryRouteDto);
  }

  findAll() {
    return this.deliveryRouteRepository.find({});
  }

  findById(id: string) {
    return this.deliveryRouteRepository.findById(id);
  }

  update(id: string, deliveryRouteUpdates: UpdateDeliveryRouteDto) {
    return this.deliveryRouteRepository.findByIdAndUpdate(
      id,
      deliveryRouteUpdates,
    );
  }

  remove(id: string) {
    return this.deliveryRouteRepository.deleteOne(id);
  }
}
