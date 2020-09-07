import React from "react";
import ShoppingImg from "../../assets/img/ic_shipping.png";
import ShoppingImg2x from "../../assets/img/ic_shipping@2x.png";

export interface ProductsListItemProps {
  picture: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  free_shipping: boolean;
  address: {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
  };
}

const ProductsListItem: React.FC<ProductsListItemProps> = ({
  picture,
  title,
  price,
  free_shipping,
  address,
}) => {
  return (
    <div className="products-list-item p-regular">
      <img src={picture} alt={title} className="products-list-item__img" />
      <div className="products-list-item__content ml-regular">
        <div className="products-list-item__text">
          <div className="products-list-item__price-container">
            <h3 className="products-list-item__price mb-large">
              ${price.amount} {price.currency}
            </h3>
            {free_shipping && (
              <img
                srcSet={`${ShoppingImg} 1x, ${ShoppingImg2x} 2x`}
                src={ShoppingImg}
                alt=""
                className="products-list-item__shipping"
              />
            )}
          </div>
          <h2 className="products-list-item__title">{title}</h2>
        </div>

        <h6 className="products-list-item__city">{address.state_name}</h6>
      </div>
    </div>
  );
};

export default ProductsListItem;
