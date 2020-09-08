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
  address?: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
  description?: string;
  condition?: string;
  sold_quantity?: number;
}
