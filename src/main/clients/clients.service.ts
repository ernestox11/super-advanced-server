import { Injectable } from '@nestjs/common';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './clients.repository';
import { Client } from './entities/client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly clientRepository: ClientsRepository) {}

  create(createClientDto: CreateClientDto): Promise<Client> {
    return this.clientRepository.create(createClientDto);
  }

  findAll() {
    return this.clientRepository.find({});
  }

  findById(id: string) {
    return this.clientRepository.findById(id);
  }

  update(id: string, clientUpdates: UpdateClientDto) {
    return this.clientRepository.findByIdAndUpdate(id, clientUpdates);
  }

  remove(id: string) {
    return this.clientRepository.deleteOne(id);
  }
}
