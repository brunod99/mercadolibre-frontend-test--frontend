import React from "react";
import { useSelector } from "react-redux";
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

  // Selector
  const singleProductMemorized = getSingleProductSelector(singleProduct);
  const categoriesMemorized = getCategoriesSelector(categories);

  return (
    <main className="product-single container">
      <Breadcrumb categories={categoriesMemorized} />
      {singleProductMemorized && (
        <ProductDetail
          id={singleProductMemorized.id}
          title={singleProductMemorized.title}
          price={singleProductMemorized.price}
          picture={singleProductMemorized.picture}
          condition={singleProductMemorized.condition}
          free_shipping={singleProductMemorized.free_shipping}
          sold_quantity={singleProductMemorized.sold_quantity}
          description={singleProductMemorized.description}
        />
      )}
    </main>
  );
};

export default ProductSingle;
