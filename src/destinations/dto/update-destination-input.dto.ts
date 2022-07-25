import { PartialType } from '@nestjs/mapped-types';
import { CreateDestinationInputDto } from './create-destination-input.dto';

export class UpdateDestinationInputDto extends PartialType(
  CreateDestinationInputDto,
) {}
