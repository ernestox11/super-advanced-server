import { PartialType } from '@nestjs/mapped-types';
import { CreateTravelLogDto } from './create-travel-log.dto';

export class UpdateTravelLogDto extends PartialType(CreateTravelLogDto) {}
