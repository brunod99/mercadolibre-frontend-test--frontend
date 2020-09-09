import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import {
  getCategoriesSelector,
  getSingleProductSelector,
} from "../../selectors/Products";
import { IInitialProductsState } from "../../types/Redux/Products";

const ProductSingle: React.FC = () => {
  // Redux
  const { categories, singleProduct } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  // Selector
  const singleProductMemorized = getSingleProductSelector(singleProduct);
  const categoriesMemorized = getCategoriesSelector(categories);

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
  } = singleProductMemorized;

  return (
    <main className="product-single container">
      <Breadcrumb categories={categoriesMemorized} />
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
