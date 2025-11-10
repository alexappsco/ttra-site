export interface CartApi {
    items:         cartItem[];
    vatPercentage: number;
    total:         number;
    vat:           number;
    discount:      number;
    shippingCost:  number;
    finalTotal:    number;
}
export interface cartItem {
    id:                      string;
    quantity:                number;
    productUnitOfMeasure:    ProductUnitOfMeasure;
    product:                 Product;
    price:                   number;
    vatPercentage:           number;
    totalPrice:              number;
    vat:                     number;
    totalPriceAfterDiscount: number;
}
export interface Product {
    id:       string;
    name:     string;
    imageUrl: string;
}

export interface ProductUnitOfMeasure {
    id:            string;
    price:         number;
    stockQuantity: number;
    unitOfMeasure: UnitOfMeasure;
    offer:         Offer;
}

export interface Offer {
    id:           string;
    price:        number;
    discount:     number;
    discountType: string;
}

export interface UnitOfMeasure {
    id:   string;
    name: string;
}