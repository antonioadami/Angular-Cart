import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new ProductsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all products', () => {
    const products = service.getProducts();

    expect(products.length).toBe(8);
  });

  it('should get a product by id', () => {
    const id = 1;
    const product = service.getProductById(id);

    expect(product?.id).toBe(1);
  });

  it('should get the banner products', () => {
    const products = service.getBannerProducts();

    expect(products.length).toBe(4);
  });
});
