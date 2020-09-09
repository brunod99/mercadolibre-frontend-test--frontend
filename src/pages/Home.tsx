import React from "react";
import { useSelector } from "react-redux";
import Splash from "../components/Splash";
import { IInitialProductsState } from "../types/Redux/Products";
const Home: React.FC = () => {
  const { products } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  return (
    <main className="home overflow-hidden">
      {products.length === 0 && (
        <Splash isAnimated>
          <h1 className="text-white f-weight-bold">
            ¡Bienvenido a Mercado Libre!
          </h1>
        </Splash>
      )}
    </main>
  );
};

export default Home;
