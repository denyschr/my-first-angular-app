export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  discountPercentage: number;
  img: string;
  description: string;
  is_in_stock: boolean;
  quantity: number;
}
