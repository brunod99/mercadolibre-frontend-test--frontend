import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import { getProductsActions } from "../redux/actions/Products";
import { getProductsSelector } from "../selectors/Products";
import { IInitialProductsState } from "../types/Redux/Products";
import { getUrlParams } from "../utils";

const ProductsList: React.FC = () => {
  // Redux
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Utils
  const searchParam = getUrlParams("search");

  // Selector
  const productsMemorized = getProductsSelector(products);

  // Hook
  useEffect(() => {
    if (searchParam) dispatch(getProductsActions(searchParam));

    // eslint-disable-next-line
  }, [searchParam]);

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
