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
          <a key={key} href={el.link} target="_blank" rel="noopener noreferrer">
            <figure className="gallery__item card">
              <img src={el.img} alt={el.title} className="gallery__img" />
              <figcaption className="port-overlay">
                <div className="gallery__title-container">
                  <h3 className="gallery__title">{el.title}</h3>
                  <p>{el.desc}</p>
                  {el.note && (
                    <p>
                      {el.note}: {" "}
                      <a
                        href={el.linkNote}
                        target="_blank"
                        rel="noopener noreferrer"
												style={{color: "#fff"}}
                      >
												Ayuda
											</a>
                    </p>
                  )}
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
