export class Order {
  orderNumber: number;
  clientId: string;
  branchOffice: string;
  destination: string;
  orderType: string;
  task: [
    {
      productID: string;
      quantity: number;
    },
  ];
}
