export interface Product {
  id: string;
  name: string;
  productImage: string;
  productUnitOfMeasures: ProductUnitOfMeasure[];
  isFavourite: boolean;
  stockQuantity: number;
}

export interface ProductUnitOfMeasure {
  id: string;
  price: number;
  stockQuantity: number;
  unitOfMeasureName: string;
  cartQuantity: number;
  vatRate: number;
  totalPrice: number;
  offer: any | null; // can refine later if offer has a structure
}
export interface ProductDetails {
  id: string;
  name: string;
  description: string;
  category: {
    id: string;
    name: string;
    imageUrl: string;
    parentCategory: {
      id: string;
      name: string;
      imageUrl: string;
      parentCategory: null | any; // You can define a recursive type if needed
    } | null;
  };
  productUnitOfMeasures: ProductUnitOfMeasure[];
  productImages: {
    id: string;
    url: string;
  }[];
  isFavourite: boolean;
    stockQuantity: number;

}