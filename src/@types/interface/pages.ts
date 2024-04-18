export interface Pages<T> {
  pageNumber: number;
  totalPages: number;
  results: T[];
  pageSize: number;
  numberOfElements: number;
}
