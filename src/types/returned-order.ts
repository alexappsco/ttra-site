export interface ReturnedOrder {
    id: string;
    orderId: string;
    orderNumber: string;
    returnOrderNumber: string;
    clientName: string;
    paymentMethodName: string;
    driverName: string;
    totalAmount: number;
    totalOrderAmount: number;
    returnedDate: string; 
    creationTime: string;
    reason: string;
    status: string; 
  }
    export interface ReturnedOrderDetails {
      orderDate: string; // ISO format date string
      address: {
        id: string;
        name: string;
        latitude: number;
        longitude: number;
        description: string | null;
        isDefault: boolean;
        userId: string;
      };     
       phone: string;
      email: string;
      orderItemsCount: number;
      orderItems: any[]; // You can replace 'any' with a specific OrderItem type if available
      id: string;
      orderId: string;
      orderNumber: string;
      returnOrderNumber: string;
      clientName: string;
      paymentMethodName: string;
      driverName: string;
      totalAmount: number;
      returnedDate: string; // 
      reason: string;
      status: string; 
      orderNote: string;
    }
    
  export interface ReturnedOrderItem {
  id: string;
  name: {
    nameEn: string;
    nameAr: string;
  };
  productImages: {
    imageUrl: string;
  }[];
  measurementUnit: {
    nameEn: string;
    nameAr: string;
  };
  price: number;
  quantity: number;
  totalPrice: number;
  productBarcode: string;
}

  