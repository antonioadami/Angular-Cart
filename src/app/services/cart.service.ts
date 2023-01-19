import { Injectable } from '@angular/core';
import { IChangeAmount } from '../models/IChangeAmount';
import { IITem } from '../models/IItem';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: IITem[] = [
    {
      id: 1,
      amount: 0,
      product: {
        title: 'IPhone 14 Preto 128GB',
        price: 3299.25,
        image: {
          url: '../../assets/imgs/iphone14.jpg',
          alt: 'IPhone 14 Preto'
        }
      },
      totalPrice: 3299.25
    },
    {
      id: 2,
      amount: 0,
      product: {
        title: 'Bateria Magsafe',
        price: 169,
        image: {
          url: '../../assets/imgs/bateria_magsafe.jpg',
          alt: 'Bateria Magsafe'
        }
      },
      totalPrice: 169
    },
    {
      id: 3,
      amount: 0,
      product: {
        title: 'Bateria Magsafe',
        price: 1376.1,
        image: {
          url: '../../assets/imgs/airpods.jpg',
          alt: 'Airpods'
        }
      },
      totalPrice: 1376.1
    }
  ];

  public getCartItems(): IITem[] {
    return this.cartItems;
  }

  public addItem(item: IITem): IITem[] {
    this.cartItems.push(item);
    return this.cartItems;
  }

  public changeAmount(data: IChangeAmount): IITem[] {
    const index = this.cartItems.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      this.cartItems[index].amount = data.amount;

      if (data.amount > 0) {
        this.cartItems[index].totalPrice =
          data.amount * this.cartItems[index].product.price;
      } else {
        this.cartItems[index].totalPrice = this.cartItems[index].product.price;
      }
    }
    return this.cartItems;
  }

  public removeItem(id: number): IITem[] {
    this.cartItems = this.cartItems.filter((item) => item.id !== id);
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
      value += item.amount * item.product.price;
    });

    return value;
  }
}
