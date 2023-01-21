import { Injectable } from '@angular/core';
import { IProduct } from '../models/IProduct';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      title: 'IPhone 14 Preto 128GB',
      price: { value: 3431.6, discount: 30, originalValue: 4289.5 },
      image: {
        url: '../../assets/imgs/iphone14.jpg',
        alt: 'IPhone 14 Preto'
      }
    },
    {
      id: 2,
      title: 'Bateria Magsafe',
      price: { value: 169, discount: 0, originalValue: 169 },
      image: {
        url: '../../assets/imgs/bateria_magsafe.jpg',
        alt: 'Bateria Magsafe'
      }
    },
    {
      id: 3,
      title: 'Airpods',
      price: { value: 1376.1, discount: 0, originalValue: 1376.1 },
      image: {
        url: '../../assets/imgs/airpods.jpg',
        alt: 'Airpods'
      }
    },
    {
      id: 4,
      title: 'Smart TV Samsung Led 32',
      price: { value: 1287.5, discount: 10, originalValue: 1430.55 },
      image: {
        url: '../../assets/imgs/tv.jpg',
        alt: 'Smart TV Samsung Led 32'
      }
    },
    {
      id: 5,
      title: 'Samsung Galaxy A13 Preto, 128GB',
      price: { value: 1259.1, discount: 0, originalValue: 1259.1 },
      image: {
        url: '../../assets/imgs/galaxy.jpg',
        alt: 'Samsung Galaxy A13 Preto'
      }
    },
    {
      id: 6,
      title: 'Samsung Galaxy Tab A8, 64GB',
      price: { value: 1749, discount: 0, originalValue: 1749 },
      image: {
        url: '../../assets/imgs/tablet.jpg',
        alt: 'Samsung Galaxy Tab A8'
      }
    },
    {
      id: 7,
      title: 'Notebook Inspiron 15 3000',
      price: { value: 3439.95, discount: 15, originalValue: 4047 },
      image: {
        url: '../../assets/imgs/notebook.jpg',
        alt: 'Notebook Inspiron 15 3000'
      }
    },
    {
      id: 8,
      title: 'HP DeskJet Ink Advantage 2774',
      price: { value: 399, discount: 20, originalValue: 499 },
      image: {
        url: '../../assets/imgs/impressora.jpg',
        alt: 'HP DeskJet Ink Advantage 2774'
      }
    }
  ];

  private bannerProducts: IProduct[] = this.products.filter(
    (p) => p.price.discount > 0
  );

  public getProducts(): IProduct[] {
    return this.products;
  }

  public getProductById(id: number): IProduct | undefined {
    return this.products.find((product) => product.id === id);
  }

  public getBannerProducts(): IProduct[] {
    return this.bannerProducts;
  }
}
