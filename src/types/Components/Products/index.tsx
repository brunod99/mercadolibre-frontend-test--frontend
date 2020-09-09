export interface IProduct {
  id: string;
  picture: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  free_shipping: boolean;
  address?: string;
  description?: string;
  condition?: string;
  sold_quantity?: number;
}
