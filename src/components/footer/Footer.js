import "./footer.css";
const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footer-icons">
        <a
          href="https://github.com/repleyva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/rusvel-enrique-pasos-leyva-969b9918b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/linkedin.png" alt="linkedin" />
        </a>
        <a
          href="https://twitter.com/repleyva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/twitter.png" alt="twitter" />
        </a>
        <a
          href="https://wa.me/+573126044003/?text=Hola Rusvel, ¿Cómo estás?, %0AMe comunico contigo desde tu portafolio web. Me gustaría solicitar tus servicios como desarrollador."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="assets/whatsapp.png" alt="whatsapp" />
        </a>
      </div>
      <div className="footer-message">
        <p>Rusvel Pasos - Todos los derechos reservados 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
