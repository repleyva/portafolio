import "./portfolio.css";
import { data } from "../../utils/data.js";
import LinkIcon from "@mui/icons-material/Link";
import { memo } from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="port-container">
      <div className="port-container-title">
        <h2>Portafolio</h2>
      </div>
      <div className="gallery-container">
        {data.map((el, key) => (
          <a href={el.link} target="_blank" rel="noopener noreferrer">
            <figure key={key} className="gallery__item card">
              <img src={el.img} alt={el.title} className="gallery__img" />
              <figcaption className="port-overlay">
                <div className="gallery__title-container">
                  <h3 className="gallery__title">{el.title}</h3>
                  <p>Sitio Responsivo</p>
                </div>
                <span>
                  <LinkIcon className="img" />
                </span>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>
    </section>
  );
};

export default memo(Portfolio);
