import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersRepository {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
  ) {}

  async findOne(id: string): Promise<Order> {
    let order: Order;

    if (!order) {
      if (isValidObjectId(id)) order = await this.orderModel.findById(id);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!order) {
      throw new NotFoundException();
    }
    return order;
  }

  async find(orderFilterQuery: FilterQuery<Order>): Promise<Order[]> {
    return this.orderModel.find(orderFilterQuery);
  }

  async create(order: Order): Promise<Order> {
    const newOrder = new this.orderModel(order);
    return newOrder.save();
  }

  async findByIdAndUpdate(id: string, order: Partial<Order>): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, order);
  }

  async deleteOne(orderId: string) {
    if (isValidObjectId(orderId)) {
      const { deletedCount } = await this.orderModel.deleteOne({
        _id: orderId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(`Order with id: "${orderId}" not found.`);
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
