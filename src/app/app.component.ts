import { Component } from '@angular/core';
import { IChangeAmount } from 'src/app/models/IChangeAmount';
import { IITem } from 'src/app/models/IItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: IITem[] = [
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

  get totalItems(): number {
    let total = 0;
    this.items.forEach((item) => {
      total += item.amount;
    });

    return total;
  }

  get totalPrice(): number {
    let value = 0;
    this.items.forEach((item) => {
      value += item.amount * item.product.price;
    });

    return value;
  }

  ChangeAmount(data: IChangeAmount) {
    const index = this.items.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      this.items[index].amount = data.amount;
      if (data.amount > 0) {
        this.items[index].totalPrice =
          data.amount * this.items[index].product.price;
      } else {
        this.items[index].totalPrice = this.items[index].product.price;
      }
    }
  }
}
