import React from "react";
import Splash from "../components/Splash";
const Home: React.FC = () => {
  return (
    <main className="home overflow-hidden">
      <Splash isAnimated>
        <h1 className="text-white f-weight-bold">
          ¡Bienvenido a Mercado Libre!
        </h1>
      </Splash>
    </main>
  );
};

export default Home;
