export interface IProduct {
  id: number;
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
