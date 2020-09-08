import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import { getProductsActions } from "../redux/actions/Products";
import { getProductsSelector } from "../selectors/Products";
import { IInitialState } from "../types/Redux/Products";
import { getUrlParams } from "../utils";

const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const searchParam = getUrlParams("search");

  useEffect(() => {
    console.log({ searchParam });
    if (searchParam) dispatch(getProductsActions(searchParam));

    // eslint-disable-next-line
  }, [searchParam]);

  const { products } = useSelector((state: IInitialState) => state);

  const productsMemorized = products;

  return (
    <section className="products-list bg-white border-radius">
      {/* {productsMemorized.map((product) => {
        const { id, title, price, picture, free_shipping, address } = product;
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
      })} */}
    </section>
  );
};

export default ProductsList;
