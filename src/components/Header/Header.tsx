import React, { useEffect } from "react";
import history from "../../history";
import { Link } from "react-router-dom";
import MagnifyGlass from "../../assets/img/ic_Search.png";
import MagnifyGlass2x from "../../assets/img/ic_Search@2x.png";
import Logo from "../../assets/img/Logo_ML.png";
import Logo2x from "../../assets/img/Logo_ML@2x.png";
import CONSTANTS from "../../constants";
import useForm from "../../hooks/useForm";
import validateSearch from "../../validations/validateSearch";
import Message from "../../utils/message";
import {
  detectDataFrom,
  encodeQuery,
  getStringFromUrlPath,
  getUrlParams,
} from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsActions,
  getSingleProductActions,
} from "../../redux/actions/Products";
import { IInitialProductsState } from "../../types/Redux/Products";
import { getProductsSelector } from "../../selectors/Products";
const Header: React.FC = () => {
  // Constants
  const { HEADER_FORM_INITIAL_STATE } = CONSTANTS;

  // Handlers
  const handleSuccess = () => {
    dispatch(getProductsActions(encodedValue));
  };

  // Redux
  const dispatch = useDispatch();
  const { products } = useSelector(
    (state: { products: IInitialProductsState }) => state.products
  );

  // Selector
  const productsMemorized = getProductsSelector(products);

  // Hooks
  // - Custom hook
  const {
    values,
    errors,
    handleFieldEvents,
    handleSubmit,
    clearValue,
  } = useForm(HEADER_FORM_INITIAL_STATE, validateSearch, handleSuccess);

  // - Effects
  // Effect that show modal if there is an error in search
  useEffect(() => {
    if (errors["search"]) {
      Message("error", "Hubo un error", errors["search"]);
    }
  }, [errors]);

  // Effect that if there is a new product search, push to the page list and clear value
  useEffect(() => {
    if (encodedValue) {
      history.push(`/items?search=${encodedValue}`);
      clearValue();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsMemorized]);

  // Effect on first render, checks if there is a product on URL and dispatch products
  useEffect(() => {
    const detectedData = detectDataFrom(urlId, searchParam);

    if (searchParam) {
      if (detectedData === "products")
        dispatch(getProductsActions(searchParam));
    }
    if (detectedData === "product-single")
      dispatch(getSingleProductActions(urlId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Destructuring
  const { search } = values;

  // Utils
  const searchParam = getUrlParams("search");
  const encodedValue = encodeQuery(search);
  const urlId = getStringFromUrlPath("/items/");

  return (
    <header className="header bg-primary">
      <div className="container d-flex">
        {/* Logo */}
        <Link className="header__img d-flex align-items-end" to="/">
          <img srcSet={`${Logo} 1x, ${Logo2x} 2x`} src={Logo} alt="Search" />
        </Link>
        <div className="header__search-bar w-100">
          {/* Form */}
          <form className="header__form d-flex h-100" onSubmit={handleSubmit}>
            <div className="header__input-group w-100">
              <input
                type="text"
                name="search"
                placeholder="Nunca dejes de buscar"
                onBlur={handleFieldEvents}
                onChange={handleFieldEvents}
                value={search}
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
