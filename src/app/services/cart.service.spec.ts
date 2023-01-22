import { TestBed } from '@angular/core/testing';
import { IITem } from '../models/IItem';
import { IProduct } from '../models/IProduct';
import { CartService } from './cart.service';
import { ProductsService } from './products.service';

describe('CartService', () => {
  let cartService: CartService;
  let productService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cartService = new CartService();
    productService = new ProductsService();
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    const product = productService.getProductById(1) as IProduct;
    const item: IITem = {
      product,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);

    const cartItems = cartService.getCartItems();

    expect(cartItems.length).toBe(1);
  });

  it('should remove a product from the cart', () => {
    const id = 1;
    const product = productService.getProductById(id) as IProduct;
    const item: IITem = {
      product,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);
    cartService.removeItem(id);

    const cartItems = cartService.getCartItems();

    expect(cartItems.length).toBe(0);
  });

  it('should change the amount of a product from the cart', () => {
    const id = 1;
    const product = productService.getProductById(id) as IProduct;
    const item: IITem = {
      product,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);
    cartService.changeAmount({ amount: 4, id });

    const cartItems = cartService.getCartItems();

    expect(cartItems[0].amount).toBe(4);
  });

  it('should change the amount of a product when added the same product', () => {
    const id = 1;
    const product = productService.getProductById(id) as IProduct;
    const item: IITem = {
      product,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);
    cartService.addItem(item);

    const cartItems = cartService.getCartItems();

    expect(cartItems[0].amount).toBe(2);
  });
});
