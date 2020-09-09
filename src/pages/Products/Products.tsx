import React from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductsList from "../../container/ProductsList";
import {
  getCategoriesSelector,
  getProductsSelector,
} from "../../selectors/Products";
import { IInitialProductsState } from "../../types/Redux/Products";

const Products: React.FC = () => {
  // Redux
  const { categories, products } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Selector
  const productsMemorized = getProductsSelector(products);
  const categoriesMemorized = getCategoriesSelector(categories);

  return (
    <main className="products container">
      <Breadcrumb categories={categoriesMemorized} />
      <ProductsList products={productsMemorized} />
    </main>
  );
};

export default Products;
