export interface IProduct {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  price: {
    originalPrice: number;
    discount: number;
    value: number;
  };
}
