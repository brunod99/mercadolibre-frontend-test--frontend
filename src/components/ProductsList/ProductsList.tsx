import React from "react";
import ProductsListItem from "./ProductsListItem";

const ProductsList: React.FC = () => {
  return (
    <section className="products-list bg-white">
      <ProductsListItem
        picture="http://http2.mlstatic.com/D_987543-MLA31352339877_072019-I.jpg"
        title="Apple Ipod Touch 5g 16gb Negro Igual a Nuevo Completo Unico!"
        price={{
          currency: "ARS",
          amount: 1.98,
          decimals: 111,
        }}
        free_shipping
        address={{
          state_id: "12321321",
          state_name: "Capital Federal",
          city_id: "123213",
          city_name: "San isidro",
        }}
      />
    </section>
  );
};

export default ProductsList;
