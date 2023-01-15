import { Component } from '@angular/core';
import { IChangeAmount } from 'src/models/IChangeAmount';
import { IITem } from 'src/models/IItem';

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
        price: {
          originalPrice: 4399,
          discount: 20,
          value: 3299.25
        },
        image: {
          url: '../../assets/imgs/iphone14.jpg',
          alt: 'IPhone 14 Preto'
        }
      }
    },
    {
      id: 2,
      amount: 0,
      product: {
        title: 'Bateria Magsafe',
        price: {
          originalPrice: 169,
          discount: 0,
          value: 169
        },
        image: {
          url: '../../assets/imgs/bateria_magsafe.jpg',
          alt: 'Bateria Magsafe'
        }
      }
    },
    {
      id: 3,
      amount: 0,
      product: {
        title: 'Bateria Magsafe',
        price: {
          originalPrice: 1529,
          discount: 10,
          value: 1376.1
        },
        image: {
          url: '../../assets/imgs/airpods.jpg',
          alt: 'Airpods'
        }
      }
    }
  ];

  get totalItems(): number {
    return this.items.filter((item) => item.amount > 0).length;
  }

  get totalPrice(): number {
    let value = 0;
    this.items.forEach((item) => {
      value += item.amount * item.product.price.value;
    });

    return value;
  }

  ChangeAmount(data: IChangeAmount) {
    const index = this.items.findIndex((item) => item.id === data.id);

    if (index !== -1) {
      this.items[index].amount = data.amount;
    }
  }
}
