export interface IProduct {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  price: {
    value: number;
    discount: number;
    originalValue: number;
  };
}
