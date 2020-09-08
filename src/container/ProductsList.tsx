import React from "react";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import MOCK_DATA from "../constants/__mockData__";

const ProductsList: React.FC = () => {
  const { ITEMS } = MOCK_DATA;

  return (
    <section className="products-list bg-white border-radius">
      {ITEMS.map((item) => {
        const { id, title, price, picture, free_shipping, address } = item;
        return (
          <ProductsListItem
            id={id}
            picture={picture}
            title={title}
            price={price}
            free_shipping={free_shipping}
            address={address}
          />
        );
      })}
    </section>
  );
};

export default ProductsList;
