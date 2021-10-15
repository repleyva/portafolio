import "./contact.css";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-desc">
        <div className="contact-title">
          <h2>Contacto</h2>
        </div>
        <div className="contact-c">
          <p>
            Si estás interezado en mis servicios puedes contactarme por{" "}
            <b>correo electrónico</b> o por <b>WhatsApp</b>.
          </p>
        </div>
				<ContactForm/>
      </div>
    </section>
  );
};

export default Contact;
