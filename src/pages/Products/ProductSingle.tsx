import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import MOCK_DATA from "../../constants/__mockData__";

const ProductSingle: React.FC = () => {
  const { CATEGORIES, SINGLE_ITEM } = MOCK_DATA;

  // Destructuring
  const {
    id,
    title,
    price,
    picture,
    condition,
    free_shipping,
    sold_quantity,
    description,
  } = SINGLE_ITEM;

  return (
    <main className="product-single container">
      <Breadcrumb categories={CATEGORIES} />
      <ProductDetail
        id={id}
        title={title}
        price={price}
        picture={picture}
        condition={condition}
        free_shipping={free_shipping}
        sold_quantity={sold_quantity}
        description={description}
      />
    </main>
  );
};

export default ProductSingle;
