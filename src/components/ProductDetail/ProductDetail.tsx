import React from "react";

interface IProductDetail {
  id: string;
  condition: string;
  sold_quantity: number;
  description: string;
  picture: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  free_shipping: boolean;
}

const ProductDetail: React.FC<IProductDetail> = ({
  condition,
  sold_quantity,
  title,
  price,
  description,
  picture,
}) => {
  return (
    <section className="product-detail bg-white border-radius">
      {/* Main */}
      <div className="product-detail__main d-flex justify-content-between align-items-start">
        {/* Img */}
        <img src={picture} alt={title} className="product-detail__img" />

        {/* Content */}
        <div className="product-detail__main-content pt-large pr-large">
          {/* Quantity */}
          <h4 className="product-detail__quantity mb-regular">
            {condition} - {sold_quantity} vendidos
          </h4>

          {/* Title */}
          <h1 className="product-detail__title mb-large f-weight-bold">
            {title}
          </h1>

          {/* Price */}
          <h3 className="product-detail__price mb-large">
            <span className="product-detail__price-sign">$</span> {price.amount}
          </h3>

          {/* Cta */}
          <button className="btn">Comprar</button>
        </div>
      </div>

      {/* Description */}
      <div className="product-detail__description-container pl-large pb-large">
        <h2 className="product-detail__description-title mb-large">
          Descripción del producto
        </h2>

        <p className="product-detail__description-copy">{description}</p>
      </div>
    </section>
  );
};

export default ProductDetail;
