import { Coffee } from './coffee';

export interface Pages {
  pageNumber: number;
  totalPages: number;
  results: Coffee[];
  pageSize: number;
  numberOfElements: number;
}
