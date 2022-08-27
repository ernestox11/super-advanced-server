import { Location } from '../../../common/schemas/location.schema';

export class DeliveryRoute {
  driverId: string;
  vehicleId: string;
  service: number;
  duration: number;
  waiting_time: number;
  distance: number;
  steps: [
    {
      type: string;
      location: Location;
      arrivalDate: number;
      duration: number;
      distance: number;
      task?: number;
      taskStatus?: string;
      deliveryTime?: number;
    },
  ];
}
