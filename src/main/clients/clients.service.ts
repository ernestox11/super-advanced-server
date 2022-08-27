import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { Client } from './entities/client.entity';
import { ReceptionPoint } from 'src/common/entities/receptionPoint.entity';

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
    return this.clientRepository.find({});
  }

  findClientById(clientId: string) {
    return this.clientRepository.findOne(clientId);
  }

  updateClient(clientId: string, clientUpdates: UpdateClientDto) {
    return this.clientRepository.findOneAndUpdate({ clientId }, clientUpdates);
  }

  removeClient(clientId: string) {
    return this.clientRepository.deleteOne(clientId);
  }
}
