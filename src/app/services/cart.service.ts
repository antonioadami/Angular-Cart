import { Injectable } from '@angular/core';
import { IChangeAmount } from '../models/IChangeAmount';
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

  public changeAmount(data: IChangeAmount): IITem[] {
    const index = this.cartItems.findIndex(
      (item) => item.product.id === data.id
    );

    if (index !== -1) {
      this.cartItems[index].amount = data.amount;

      if (data.amount > 0) {
        this.cartItems[index].totalPrice =
          data.amount * this.cartItems[index].product.price.value;
      } else {
        this.cartItems[index].totalPrice =
          this.cartItems[index].product.price.value;
      }
    }
    return this.cartItems;
  }

  public removeItem(id: number): IITem[] {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== id);
    return this.cartItems;
  }

  getTotalItems(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.amount;
    });

    return total;
  }

  getTotalPrice(): number {
    let value = 0;
    this.cartItems.forEach((item) => {
      value += item.amount * item.product.price.value;
    });

    return value;
  }
}
