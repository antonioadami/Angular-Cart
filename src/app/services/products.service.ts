import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: IProduct[] = [];

  public getProducts(): IProduct[] {
    return this.products;
  }
}
