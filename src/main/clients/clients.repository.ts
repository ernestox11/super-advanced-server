import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {}

  async findById(id: string): Promise<Client> {
    let client: Client;

    if (!client) {
      if (isValidObjectId(id)) client = await this.clientModel.findById(id);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!client) {
      throw new NotFoundException();
    }
    return client;
  }

  async find(clientFilterQuery: FilterQuery<Client>): Promise<Client[]> {
    return this.clientModel.find(clientFilterQuery);
  }

  async create(client: Client): Promise<Client> {
    const newClient = new this.clientModel(client);
    return newClient.save();
  }

  async findByIdAndUpdate(
    id: string,
    client: Partial<Client>,
  ): Promise<Client> {
    return this.clientModel.findByIdAndUpdate(id, client);
  }

  async deleteOne(clientId: string) {
    if (isValidObjectId(clientId)) {
      const { deletedCount } = await this.clientModel.deleteOne({
        _id: clientId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `Client with id: "${clientId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
