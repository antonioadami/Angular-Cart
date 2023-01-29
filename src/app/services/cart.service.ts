import { Injectable } from '@angular/core';
import { IChangeAmount } from '../models/IChangeAmount';
import { IDiscount } from '../models/IDiscount';
import { IITem } from '../models/IItem';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: IITem[] = [];
  private discount: IDiscount = { percentage: 0, price: 0, value: 0 };

  public getCartItems(): IITem[] {
    return this.cartItems;
  }

  public addItem(item: IITem): IITem[] {
    const index = this.cartItems.findIndex(
      (i) => i.product.id === item.product.id
    );

    if (index !== -1) {
      this.changeAmount({
        id: item.product.id,
        amount: this.cartItems[index].amount + item.amount
      });
    } else {
      this.cartItems.push(item);
    }

    this.calculateDiscount();

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
          data.amount * this.cartItems[index].product.price;
      } else {
        this.cartItems[index].totalPrice = this.cartItems[index].product.price;
      }
    }
    this.calculateDiscount();
    return this.cartItems;
  }

  public removeItem(id: number): IITem[] {
    this.cartItems = this.cartItems.filter((item) => item.product.id !== id);
    this.calculateDiscount();
    return this.cartItems;
  }

  public getTotalItems(): number {
    let total = 0;
    this.cartItems.forEach((item) => {
      total += item.amount;
    });

    return total;
  }

  public getTotalPrice(): number {
    let value = 0;
    this.cartItems.forEach((item) => {
      value += item.amount * item.product.price;
    });

    return value;
  }

  public getDiscount(): IDiscount {
    return this.discount;
  }

  public setDiscount(value: string): IDiscount {
    const parsedDiscount = value.split(' ');
    const discount = parseInt(parsedDiscount[1]);
    if (discount > 0 && discount <= 100) {
      this.discount.percentage = discount;
      this.calculateDiscount();
    }
    return this.discount;
  }

  private calculateDiscount(): void {
    this.discount.value =
      this.getTotalPrice() * (this.discount.percentage / 100);
    this.discount.price = this.getTotalPrice() - this.discount.value;
  }
}
