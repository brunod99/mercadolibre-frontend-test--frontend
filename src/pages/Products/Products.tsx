import React from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import MOCK_DATA from "../../constants/__mockData__";
import ProductsList from "../../container/ProductsList";

const Products: React.FC = () => {
  // Destructuring
  const { CATEGORIES } = MOCK_DATA;

  return (
    <main className="products container">
      <Breadcrumb categories={CATEGORIES} />
      <ProductsList />
    </main>
  );
};

export default Products;
