import React from "react";
import LogoBig from "../../assets/img/logo-big.png";

export interface ISplash {
  children?: React.ReactNode;
  isAnimated: boolean;
}

const Splash: React.FC<ISplash> = ({ children, isAnimated }) => {
  return (
    <main
      className={`splash d-flex flex-column align-items-center justify-content-center bg-primary ${
        isAnimated && "splash--state-animation"
      }`}
    >
      <img src={LogoBig} alt="Mercado Libre" />

      {children}
    </main>
  );
};

export default Splash;
