import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: IProduct[] = [
    {
      title: 'IPhone 14 Preto 128GB',
      price: { value: 3299.25, discount: 0, originalValue: 3299.25 },
      image: {
        url: '../../assets/imgs/iphone14.jpg',
        alt: 'IPhone 14 Preto'
      }
    },
    {
      title: 'Bateria Magsafe',
      price: { value: 169, discount: 0, originalValue: 169 },
      image: {
        url: '../../assets/imgs/bateria_magsafe.jpg',
        alt: 'Bateria Magsafe'
      }
    },
    {
      title: 'Airpods',
      price: { value: 1376.1, discount: 0, originalValue: 1376.1 },
      image: {
        url: '../../assets/imgs/airpods.jpg',
        alt: 'Airpods'
      }
    }
  ];

  private bannerProducts: IProduct[] = [
    {
      title: 'IPhone 14 Preto 128GB',
      price: { value: 3299.25, discount: 0, originalValue: 3299.25 },
      image: {
        url: '../../assets/imgs/iphone14.jpg',
        alt: 'IPhone 14 Preto'
      }
    },
    {
      title: 'Bateria Magsafe',
      price: { value: 169, discount: 0, originalValue: 169 },
      image: {
        url: '../../assets/imgs/bateria_magsafe.jpg',
        alt: 'Bateria Magsafe'
      }
    },
    {
      title: 'Airpods',
      price: { value: 1376.1, discount: 0, originalValue: 1376.1 },
      image: {
        url: '../../assets/imgs/airpods.jpg',
        alt: 'Airpods'
      }
    }
  ];

  public getProducts(): IProduct[] {
    return this.products;
  }
  public getBannerProducts(): IProduct[] {
    return this.bannerProducts;
  }
}
