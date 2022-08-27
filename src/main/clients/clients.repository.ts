import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {}

  async findOne(clientId: string): Promise<Client> {
    let client: Client;

    if (!client && isValidObjectId(clientId)) {
      client = await this.clientModel.findById(clientId);
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

  async findOneAndUpdate(
    clientFilterQuery: FilterQuery<Client>,
    client: Partial<Client>,
  ): Promise<Client> {
    return this.clientModel.findOneAndUpdate(clientFilterQuery, client);
  }

  async deleteOne(clientId: string) {
    const { deletedCount } = await this.clientModel.deleteOne({
      _id: clientId,
    });
    if (deletedCount === 0) {
      throw new BadRequestException(`Client with id: "${clientId}" not found.`);
    }
    return;
  }
}
