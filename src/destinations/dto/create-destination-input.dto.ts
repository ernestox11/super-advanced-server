import { IsNumber } from 'class-validator';

export class CreateDestinationInputDto {
  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;
}
