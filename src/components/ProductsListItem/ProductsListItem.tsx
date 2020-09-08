import React from "react";
import { Link } from "react-router-dom";
import ShoppingImg from "../../assets/img/ic_shipping.png";
import ShoppingImg2x from "../../assets/img/ic_shipping@2x.png";
import { IProductsListItem } from "../../types/Components/Products";

const ProductsListItem: React.FC<IProductsListItem> = ({
  id,
  picture,
  title,
  price,
  free_shipping,
  address,
}) => {
  return (
    <Link
      className="products-list-item d-flex align-items-center"
      to={`/items/${id}`}
    >
      {/* Img */}
      <img
        src={picture}
        alt={title}
        className="products-list-item__img m-regular"
      />

      <div className="products-list-item__content w-100">
        {/* Text */}
        <div className="products-list-item__text  w-100 d-flex justify-content-between align-items-end mb-large">
          {/* Price + Shipping */}
          <div className="products-list-item__price-container d-flex align-items-end">
            <h3 className="products-list-item__price title">${price.amount}</h3>
            {free_shipping && (
              <img
                srcSet={`${ShoppingImg} 1x, ${ShoppingImg2x} 2x`}
                src={ShoppingImg}
                alt="Free shipping"
                className="products-list-item__shipping"
              />
            )}
          </div>

          {/* City */}
          <h6 className="products-list-item__city">{address.state_name}</h6>
        </div>

        <h2 className="products-list-item__title">{title}</h2>
      </div>
    </Link>
  );
};

export default ProductsListItem;
