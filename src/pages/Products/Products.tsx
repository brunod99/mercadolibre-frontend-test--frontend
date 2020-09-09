import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductsList from "../../container/ProductsList";
import {
  getCategoriesSelector,
  getProductsSelector,
} from "../../selectors/Products";
import { IInitialProductsState } from "../../types/Redux/Products";
import Message from "../../utils/message";

const Products: React.FC = () => {
  // Redux
  const { categories, products, error } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Selector
  const productsMemorized = getProductsSelector(products);
  const categoriesMemorized = getCategoriesSelector(categories);

  // Hooks
  useEffect(() => {
    if (error) {
      Message(
        "error",
        "Hay un error :(",
        "Hay un error con el servidor, intente más tarde."
      );
    }
  }, [error]);

  return (
    <main className="products container">
      <Breadcrumb categories={categoriesMemorized} />
      <ProductsList products={productsMemorized} />
    </main>
  );
};

export default Products;
