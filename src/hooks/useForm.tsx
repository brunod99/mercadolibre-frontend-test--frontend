import { useState, useEffect } from "react";
import { HookUseSearchType } from "../types/Hooks";

const useForm: HookUseSearchType = (initialState, validations, fn) => {
  // Hooks
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      if (Object.keys(errors).length === 0) {
        setValues(initialState);

        fn();
      }

      setSubmitForm(false);
    }
    // eslint-disable-next-line
  }, [errors]);

  // Handlers
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validations(values));

    setSubmitForm(true);
  };

  const handleFieldEvents = (e: React.FocusEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return {
    values,
    errors,
    handleFieldEvents,
    handleSubmit,
  };
};

export default useForm;
