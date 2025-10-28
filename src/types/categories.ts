export interface Category {
  id: string;
  nameAr: string;
  nameEn: string;
  name: string;
  imageUrl: string;
  isActive: boolean;
  order: number;
  parentCategoryId: string | null;
  parentCategory: Category | null;
}

export interface Sub_Category {
  id: string;
  nameAr: string;
  nameEn: string;
  name: string;
  imageUrl: string;
  isActive: boolean;
  order: number;
  parentCategoryId: string | null;
  parentCategory: Category | null;
}