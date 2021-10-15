import { useState } from "react";
import { helpHttps } from "../helpers/helpHttps";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form, // tomamos una copia de lo que tiene form y se combina con lo siguiente
      [name]: value, // se toma el nombre del input y con este se crea un estado y se le agrega el valor de dicho input
    });
  }; // manejador de cambios

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  }; // manejador de cambio de foco

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      alert("Enviando Formulario");
      setLoading(true);
      helpHttps()
        .post("https://formsubmit.co/ajax/rusvelpassos@gmail.com", {
          body: form,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 5000);
        });
    } else {
      return;
    }
  }; // manejador de envio de datos

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
