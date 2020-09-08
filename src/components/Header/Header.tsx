import React, { useEffect } from "react";
import { History } from "history";
import { Link } from "react-router-dom";
import MagnifyGlass from "../../assets/img/ic_Search.png";
import MagnifyGlass2x from "../../assets/img/ic_Search@2x.png";
import Logo from "../../assets/img/Logo_ML.png";
import Logo2x from "../../assets/img/Logo_ML@2x.png";
import CONSTANTS from "../../constants";
import useForm from "../../hooks/useForm";
import validateSearch from "../../validations/validateSearch";
import Message from "../../utils/message";
import { encodeQuery } from "../../utils";
interface ChildComponentProps {
  history: History;
}

const Header: React.FC<ChildComponentProps> = ({ history }) => {
  // Constants
  const { HEADER_FORM_INITIAL_STATE } = CONSTANTS;

  // Handlers
  const handleSuccess = () => {
    history.push(`/items?search=${encodeQuery(q)}`);
  };

  // Hooks
  const { values, errors, handleFieldEvents, handleSubmit } = useForm(
    HEADER_FORM_INITIAL_STATE,
    validateSearch,
    handleSuccess
  );

  useEffect(() => {
    if (errors["q"]) {
      Message("error", "Hubo un error", errors["q"]);
    }
  }, [errors]);

  // Destructuring
  const { q } = values;

  return (
    <header className="header bg-primary">
      <div className="container d-flex">
        {/* Logo */}
        <Link className="header__img d-flex align-items-end" to="/">
          <img srcSet={`${Logo} 1x, ${Logo2x} 2x`} src={Logo} alt="Search" />
        </Link>
        <div className="header__search-bar w-100">
          {/* Form */}
          <form
            action=""
            className="header__form d-flex h-100"
            onSubmit={handleSubmit}
          >
            <div className="header__input-group w-100">
              <input
                type="text"
                name="q"
                placeholder="Nunca dejes de buscar"
                onBlur={handleFieldEvents}
                onChange={handleFieldEvents}
                value={q}
                className="h-100"
              />
            </div>
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
