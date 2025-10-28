export interface Order {
    id: string;
    orderNumber: string;
    clientName: string;
    creationTime: string;
    paymentMethodName: string;
    totalOrderAmount: number;
    driverName: string;
    status: string;
    isPaid: boolean;
    transactionStatus:string;
    orderStatus: string;
  }
  export interface OrderListResponse  {
    totalCount: number;
    items: Order[];
  }
 // Define a generic response interface
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
  status: number;
}

// Define OrderStatus interface
export interface OrderStatus {
  total: number;
  pending: number;
  processing: number;
  shipped: number;
  delivered: number;
  canceled: number;
  returned: number;
  inProgress: number;
  accepted: number;
  rejected: number;
}
  
  export interface PaymentMethod {
    id: string;
    name: string;
    description: string;
    isActive: boolean;
    processingFee: number;
    image: string;
  }
  
  export interface PaymentMethodsData {
    totalCount: number;
    items: PaymentMethod[];
  }
  
  export interface PaymentMethodsApiResponse {
    success: boolean;
    data: {
      items: PaymentMethod[];
      code: number;
      message: string;
      data: PaymentMethodsData[];
      name: string;
    };
    message: string;
    status: number;
  }
  export interface OrderItem {
    id: string;
    productId: string;
    productBarcode: string;
    productNameAr: string;
    productNameEn: string;
    productImage: string;
    unitOfMeasureNameAr: string;
    unitOfMeasureNameEn: string;
    quantity: number;
    priceAtPurchase: number;
    totalPrice: number;
  }
  export interface OrderDetailsType {
    id: string;
    clientName: string;
    clientPhone: string;
    clientEmail: string;
    clientAddress: string;
    creationTime: string; // ISO date string
    lastModificationTime: string; // ISO date string
    orderNumber: string;
    status: string;
    paymentMethodName: string;
    driverName: string | null;
    transactionStatus: string;
    totalPrice: number;
    discount: number;
    shippingCost: number;
    vatRate: number;
    vatAmount: number;
    totalOrderAmount: number;
    note: string | null;
    orderItems: OrderItem[]; // Change `any[]` to a specific type if order items have a defined structure
    longitude: number;
    latitude: number;
  }
  export interface OrderResponse {
    success: boolean;
    data: OrderDetailsType;
    message: string;
    status: number;
  }
  export interface DriverOrder {
    
    orderId: string;
  orderNumber: string;
  orderCreatedDate: string; // ISO date string
  orderStatus: string;
  clientName: string;
  totalOrderAmount: number;
  paymentMethodName: string;
  }
  export interface DriverOrders{
    items:DriverOrder[]
    
  }
  export interface PastOrders {
  id: string;
  orderNumber: string;
  status: string;
  orderDate: string; // ISO string format
  deliveryDate: string; // ISO string format
  orderItems: {
    productName: string;
    quantity: number;
    unitOfMeasure: string;
    totalPrice: number;
    imageUrls: {
      url: string;
    }[];
  }[];
  price: {
    totalPrice: number;
    discount: number;
    shippingPrice: number;
    finalPrice: number;
  };
}
