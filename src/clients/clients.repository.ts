import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientsRepository {
  constructor(
    @InjectModel(Client.name) private readonly clientModel: Model<Client>,
  ) {}

  async findOne(clientFilterQuery: FilterQuery<Client>): Promise<Client> {
    return this.clientModel.findOne(clientFilterQuery);
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
}
