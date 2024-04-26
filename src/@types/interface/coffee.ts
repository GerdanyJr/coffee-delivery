export interface Coffee {
  id: string;
  image: string;
  categories: Category[];
  name: string;
  description: string;
  price: string;
}
export interface Category {
  name: string;
  id: string;
}
