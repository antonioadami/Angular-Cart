/* eslint-disable @typescript-eslint/no-empty-function */
import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from 'src/environments/environment';
import { IProductsResponse } from '../models/IProductsResponse';
import {
  productsListData,
  productData,
  productsBannerListData
} from '../mock/products';
import { IProduct } from '../models/IProduct';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpController: HttpTestingController;

  const API_URL = `${environment.API_URL}/products`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should get all products', (done) => {
    service.getProducts().subscribe({
      next: (response: IProductsResponse) => {
        expect(response.products.length).toBeGreaterThan(0);
        expect(response.products[0].title).toEqual('iPhone 8');
        done();
      },
      error: (_err) => {}
    });

    const http = httpController.expectOne(API_URL);

    expect(http.request.method).toBe('GET');
    expect(http.request.headers).toBeTruthy();

    http.flush(productsListData);
  });

  it('should get a product by id', (done) => {
    const id = 1;

    service.getProductById(id).subscribe({
      next: (response: IProduct) => {
        expect(response.id).toEqual(1);
        expect(response.title).toEqual('iPhone 9');
        done();
      },
      error: (_err) => {}
    });

    const http = httpController.expectOne(`${API_URL}/${id}`);

    expect(http.request.method).toBe('GET');
    expect(http.request.headers).toBeTruthy();

    http.flush(productData);
  });

  it('should get the banner products', (done) => {
    service.getBannerProducts().subscribe({
      next: (response: IProductsResponse) => {
        expect(response.products.length).toEqual(5);
        expect(response.products[0].title).toEqual('iPhone 8');
        done();
      },
      error: (_err) => {}
    });

    const http = httpController.expectOne(`${API_URL}?limit=5`);

    expect(http.request.method).toBe('GET');
    expect(http.request.headers).toBeTruthy();

    http.flush(productsBannerListData);
  });
});
