import React from "react";
import { useSelector } from "react-redux";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import { getProductsSelector } from "../selectors/Products";
import { IInitialProductsState } from "../types/Redux/Products";

const ProductsList: React.FC = () => {
  // Redux
  const { products } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Selector
  const productsMemorized = getProductsSelector(products);

  return (
    <section className="products-list bg-white border-radius">
      {productsMemorized.map((product) => {
        const { id, title, price, picture, free_shipping, address } = product;
        return (
          <ProductsListItem
            id={id}
            picture={picture}
            title={title}
            price={price}
            free_shipping={free_shipping}
            address={address}
            key={id}
          />
        );
      })}
    </section>
  );
};

export default ProductsList;
