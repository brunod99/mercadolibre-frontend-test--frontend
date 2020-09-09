import React from "react";
import Logo from "../../assets/img/Logo_ML.png";
import Logo2x from "../../assets/img/Logo_ML@2x.png";

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
      <img
        srcSet={`${Logo} 1x, ${Logo2x} 2x`}
        src={Logo}
        alt="Mercado Libre"
        className="mb-large"
      />

      {children}
    </main>
  );
};

export default Splash;
