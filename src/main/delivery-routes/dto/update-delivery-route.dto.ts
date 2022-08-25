import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryRouteDto } from './create-delivery-route.dto';

export class UpdateDeliveryRouteDto extends PartialType(CreateDeliveryRouteDto) {}
