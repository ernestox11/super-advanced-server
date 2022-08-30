import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { DeliveryRoute } from './entities/delivery-route.entity';

@Injectable()
export class DeliveryRoutesRepository {
  constructor(
    @InjectModel(DeliveryRoute.name)
    private readonly deliveryRouteModel: Model<DeliveryRoute>,
  ) {}

  async findOne(id: string): Promise<DeliveryRoute> {
    let deliveryRoute: DeliveryRoute;

    if (!deliveryRoute) {
      if (isValidObjectId(id))
        deliveryRoute = await this.deliveryRouteModel.findById(id);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!deliveryRoute) {
      throw new NotFoundException();
    }
    return deliveryRoute;
  }

  async find(
    deliveryRouteFilterQuery: FilterQuery<DeliveryRoute>,
  ): Promise<DeliveryRoute[]> {
    return this.deliveryRouteModel.find(deliveryRouteFilterQuery);
  }

  async create(deliveryRoute: DeliveryRoute): Promise<DeliveryRoute> {
    const newDeliveryRoute = new this.deliveryRouteModel(deliveryRoute);
    return newDeliveryRoute.save();
  }

  async findByIdAndUpdate(
    id: string,
    deliveryRoute: Partial<DeliveryRoute>,
  ): Promise<DeliveryRoute> {
    return this.deliveryRouteModel.findByIdAndUpdate(id, deliveryRoute);
  }

  async deleteOne(deliveryRouteId: string) {
    if (isValidObjectId(deliveryRouteId)) {
      const { deletedCount } = await this.deliveryRouteModel.deleteOne({
        _id: deliveryRouteId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `DeliveryRoute with id: "${deliveryRouteId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
