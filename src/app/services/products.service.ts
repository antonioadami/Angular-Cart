import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IProductsResponse } from '../models/IProductsResponse';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  productsBaseUrl = `${environment.API_URL}/products`;

  public getProducts(): Observable<IProductsResponse> {
    return this.http.get<IProductsResponse>(`${this.productsBaseUrl}`);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.productsBaseUrl}/${id}`);
  }

  public getBannerProducts(): Observable<IProductsResponse> {
    return this.http.get<IProductsResponse>(`${this.productsBaseUrl}?limit=5`);
  }
}
