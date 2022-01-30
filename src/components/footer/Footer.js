import "./footer.css";
import { social } from "../../utils/data";

const Footer = () => {
  return (
    <footer className="footerWrapper">
      <div className="footer-icons">
        {social.map((item, index) => (
          <a href={item.src} target="_blank" rel="noopener noreferrer">
            <img src={item.img} alt={item.title} />
          </a>
        ))}
      </div>
      <div className="footer-message">
        <p>Rusvel Pasos - Todos los derechos reservados 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
