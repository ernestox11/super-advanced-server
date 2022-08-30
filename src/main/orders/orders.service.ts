import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly orderRepository: OrdersRepository) {}

  create(createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderRepository.create(createOrderDto);
  }

  findAll() {
    return this.orderRepository.find({});
  }

  findById(id: string) {
    return this.orderRepository.findOne(id);
  }

  update(id: string, orderUpdates: UpdateOrderDto) {
    return this.orderRepository.findByIdAndUpdate(id, orderUpdates);
  }

  remove(id: string) {
    return this.orderRepository.deleteOne(id);
  }
}
