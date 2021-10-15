import React from "react";
import { useForm } from "../../hooks/useForm";
import Loader from "../loader/Loader";
import Message from "../message/Message";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁÉÍÓÚáéíóúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El Email ingresado es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto a Tratar' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Mensaje' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "El campo 'Comentarios' no debe exceder los 255 caracteres";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm);

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit} className="container-form_form">
        <div className="container-form__ne">
          <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {/* {errors.name && <p style={styles}>{errors.name}</p>} */}
          <input
            type="email"
            name="email"
            placeholder="Escribe tu email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
          {/* {errors.email && <p style={styles}>{errors.email}</p>} */}
        </div>
        <div className="container-form__am">
          <input
            type="text"
            name="subject"
            placeholder="Asunto a Tratar"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.subject}
            required
          />
          {/* {errors.subject && <p style={styles}>{errors.subject}</p>} */}
          <textarea
            name="comments"
            cols="50"
            rows="5"
            placeholder="Mensaje (máximo 255 palabras)"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.comments}
            required
          ></textarea>
          {/* {errors.comments && <p style={styles}>{errors.comments}</p>} */}
        </div>
        <div className="container-form__send">
          <input
            className={
              errors.name && errors.email && errors.subject && errors.comments
                ? "error"
                : "btn_send"
            }
            type="submit"
            value="ENVIAR"
          />
          {loading && <Loader />}
          {response && (
            <Message msg="Envío de datos exitoso" bgColor="#198754" />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
