import { Controller, Post, Body } from '@nestjs/common';
import { DistanceService } from './distance.service';

@Controller('distance')
export class DistanceController {
  constructor(private readonly distanceService: DistanceService) {}

  @Post()
  getShortestPath(
    @Body()
    body: {
      coordinates: {
        receptionPointID: string;
        latitude: string;
        longitude: string;
      }[];
    },
  ) {
    return this.distanceService.findShortestPath(body.coordinates);
  }
}
