import { useState } from "react";
import { useTranslation } from "react-i18next";

const useForm = (type) => {
  const { t, i18n } = useTranslation();

  const types = {
    email: {
      regex:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      erro: t("emailreq"),
      message: t("emailinv"),
    },
    name: {
      erro: t("nomereq"),
    },
  };

  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  const validate = (value) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError(types[type].erro);
      return false;
    } else if (types[type].regex && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }) => {
    if (error) {
      validate(target.value);
    }
    setValue(target.value);
    if (type === "phone") {
      target.value = target.value.replace(/\D/g, "");
      target.value = target.value.replace(/(\d{2})(\d)/, "($1) $2");
      target.value = target.value.replace(/(\d)(\d{4})$/, "$1-$2");
      setValue(target.value);
    }
  };

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
