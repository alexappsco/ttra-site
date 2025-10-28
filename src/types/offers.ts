
export interface Offer {
  id: string;
  price: number;
  vatRate: number;
  vatAmount: number;
  totalPrice: number;
  discount: number;
  startDate: string;
  endDate: string;
  isActive: boolean;
  discountType: 'Percentage' | 'FixedAmount';
  productUnitOfMeasure: ProductUnitOfMeasure;
}
interface ProductUnitOfMeasure {
  productId: string;
  id: string;
  productName: string;
  productBarcode: string;
  unitOfMeasureName: string;
  isFavorite: boolean;
  price: number;
  cartQuantity: number;
  stockQuantity: number;
  vatRate: number;
  vatAmount: number;
  totalPrice: number;
  productImageUrl: string;
}