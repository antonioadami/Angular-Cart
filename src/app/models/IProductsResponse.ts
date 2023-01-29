import { IProduct } from './IProduct';

export interface IProductsResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}
