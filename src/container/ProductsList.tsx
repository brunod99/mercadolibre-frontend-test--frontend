import React from "react";
import ProductsListItem from "../components/ProductsListItem/ProductsListItem";
import { IProduct } from "../types/Components/Products";

interface IProductsList {
  products: IProduct[];
}

const ProductsList: React.FC<IProductsList> = ({ products }) => {
  return (
    <section className="products-list bg-white border-radius">
      {products.map((product) => {
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
