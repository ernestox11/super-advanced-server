import { PartialType } from '@nestjs/mapped-types';
import { CreateLoadCapacityDto } from './create-load-capacity.dto';

export class UpdateLoadCapacityDto extends PartialType(CreateLoadCapacityDto) {}
