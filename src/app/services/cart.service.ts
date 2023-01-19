import { Injectable } from '@angular/core';
import { IITem } from '../models/IItem';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: IITem[] = [];

  public getCartItems(): IITem[] {
    return this.cartItems;
  }

  public addItem(item: IITem): IITem[] {
    this.cartItems.push(item);
    return this.cartItems;
  }

  public changeAmount(id: number, amount: number): IITem[] {
    const index = this.cartItems.findIndex((item) => item.id === id);
    this.cartItems[index].amount = amount;
    return this.cartItems;
  }

  public removeItem(id: number): IITem[] {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
    return this.cartItems;
  }
}
