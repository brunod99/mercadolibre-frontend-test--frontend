// @ts-nocheck

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import history from "../history";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import { getSingleProductActions } from "../redux/actions/Products";
import { getSingleProductSelector } from "../selectors/Products";
import { IProduct } from "../types/Components/Products";
import { IInitialProductsState } from "../types/Redux/Products";
import { checkObjectHasKeys } from "../utils";

interface IProductsList {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
  // Redux
  const dispatch = useDispatch();
  const { singleProduct } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Selectors
  const singleProductMemorized = getSingleProductSelector(singleProduct);

  // Hooks
  // - State
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // - Effect
  useEffect(() => {
    if (checkObjectHasKeys(singleProductMemorized, 0)) {
      history.push(`/items/${selectedId}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleProductMemorized]);

  return (
    <section className="products-list bg-white border-radius">
      {products.map((product) => {
        const { id, title, price, picture, free_shipping, address } = product;

        // Handlers
        const handleClick = () => {
          dispatch(getSingleProductActions(id));
          setSelectedId(id);
        };

        return (
          <ProductsListItem
            id={id}
            picture={picture}
            title={title}
            price={price}
            free_shipping={free_shipping}
            address={address}
            key={id}
            handleClick={handleClick}
          />
        );
      })}
    </section>
  );
};

export default ProductsList;
