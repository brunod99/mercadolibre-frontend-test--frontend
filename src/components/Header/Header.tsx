import React from "react";
import MagnifyGlass from "../../assets/img/ic_Search.png";
import MagnifyGlass2x from "../../assets/img/ic_Search@2x.png";
import Logo from "../../assets/img/Logo_ML.png";
import Logo2x from "../../assets/img/Logo_ML@2x.png";

const Header: React.FC = () => {
  return (
    <header className="header bg-primary">
      <div className="container d-flex">
        {/* Logo */}
        <div className="header__img d-flex align-items-end">
          <img srcSet={`${Logo} 1x, ${Logo2x} 2x`} src={Logo} alt="Search" />
        </div>
        <div className="header__search-bar w-100">
          {/* Form */}
          <form action="" className="header__form d-flex h-100">
            <input type="text" placeholder="Nunca dejes de buscar" />
            <button
              type="submit"
              className="header__form-button d-flex align-items-center justify-content-center"
            >
              <img
                srcSet={`${MagnifyGlass} 1x, ${MagnifyGlass2x} 2x`}
                src={MagnifyGlass}
                alt="Search"
              />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
