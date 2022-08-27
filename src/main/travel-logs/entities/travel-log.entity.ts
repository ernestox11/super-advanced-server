export class TravelLog {
  originId: string;
  destinationId: string;
  estimatedTravelTime: number;
  estimatedDeliveryTime: number;
  log: [
    {
      orderID: string;
      taskId: number;
      arrivalDate: number;
      duration: number;
      deliveryTime: number;
    },
  ];
}
