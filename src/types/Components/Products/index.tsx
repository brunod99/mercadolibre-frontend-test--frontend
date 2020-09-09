export interface IProduct {
  id: string | undefined;
  picture: string | undefined;
  title: string | undefined;
  price:
    | {
        currency: string | undefined;
        amount: number | undefined;
        decimals: number | undefined;
      }
    | undefined;
  free_shipping: boolean | undefined;
  address?:
    | {
        state_id: string | undefined;
        state_name: string | undefined;
        city_id: string | undefined;
        city_name: string | undefined;
      }
    | undefined;
  description?: string | undefined;
  condition?: string | undefined;
  sold_quantity?: number | undefined;
}
