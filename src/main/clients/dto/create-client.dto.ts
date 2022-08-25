import { IsArray, IsString } from 'class-validator';
import { ReceptionPoint } from 'src/common/schemas/receptionPoint.schema';
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
