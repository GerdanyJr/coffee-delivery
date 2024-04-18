export interface Coffee {
  id: string;
  image: string;
  categories: [{ name: string; id: string }];
  name: string;
  description: string;
  price: string;
}
