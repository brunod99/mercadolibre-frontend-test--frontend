import {
  HookUseSearchValidationType,
  HookUseSearchState,
} from "../types/Hooks";

const validateSearch: HookUseSearchValidationType = (fieldValues) => {
  const keys = Object.keys(fieldValues);

  let validateSearchErrors: HookUseSearchState = {};

  keys.forEach((keyVal) => {
    const value = fieldValues[keyVal];

    switch (keyVal) {
      case "q":
        if (value.length < 1) {
          return (validateSearchErrors[keyVal] =
            "Por favor elije tu artículo a buscar");
        }
        break;
      default:
        return validateSearchErrors;
    }
  });

  return validateSearchErrors;
};

export default validateSearch;
