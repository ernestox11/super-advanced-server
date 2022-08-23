import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { ReceptionPoint } from '../common/schemas/receptionPoint.schema';
import { Client } from './schemas/client.schema';

@Injectable()
export class ClientsService {
  constructor(private readonly clientRepository: ClientsRepository) {}

  createClient(
    clientName: string,
    email: string,
    receptionPoints: [ReceptionPoint],
    phoneNumber: [number],
  ): Promise<Client> {
    return this.clientRepository.create({
      clientName,
      email,
      receptionPoints,
      phoneNumber,
    });
  }

  findAll() {
    return `This action returns all clients`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
