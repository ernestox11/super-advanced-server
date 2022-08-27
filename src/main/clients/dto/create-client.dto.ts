import { IsArray, IsString } from 'class-validator';
import { ReceptionPoint } from 'src/common/entities/receptionPoint.entity';
export class CreateClientDto {
  @IsString()
  clientName: string;

  @IsString()
  email: string;

  @IsArray()
  receptionPoints: [ReceptionPoint];

  @IsArray()
  phoneNumber: [number];
}
