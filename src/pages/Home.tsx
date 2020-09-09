import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Splash from "../components/Splash";
import { IInitialProductsState } from "../types/Redux/Products";
import Message from "../utils/message";
const Home: React.FC = () => {
  // Redux
  const { products, singleProduct, error } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

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
    <main className="home overflow-hidden">
      {products.length === 0 && !singleProduct && (
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
