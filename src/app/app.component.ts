import { Component } from '@angular/core';
import { IITem } from 'src/models/IItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: IITem[] = [
    {
      amount: 1,
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
      amount: 2,
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
      amount: 1,
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
}
