import { TestBed } from '@angular/core/testing';
import { productData } from '../mock/products';
import { IITem } from '../models/IItem';
import { CartService } from './cart.service';

describe('CartService', () => {
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    cartService = new CartService();
  });

  it('should be created', () => {
    expect(cartService).toBeTruthy();
  });

  it('should add a product to the cart', () => {
    const item: IITem = {
      product: productData,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);

    const cartItems = cartService.getCartItems();

    expect(cartItems.length).toBe(1);
  });

  it('should remove a product from the cart', () => {
    const id = 1;
    const item: IITem = {
      product: productData,
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
    const item: IITem = {
      product: productData,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);
    cartService.changeAmount({ amount: 4, id });

    const cartItems = cartService.getCartItems();

    expect(cartItems[0].amount).toBe(4);
  });

  it('should change the amount of a product when added the same product', () => {
    const item: IITem = {
      product: productData,
      amount: 1,
      totalPrice: 3431.6
    };

    cartService.addItem(item);
    cartService.addItem(item);

    const cartItems = cartService.getCartItems();

    expect(cartItems[0].amount).toBe(2);
  });
});
