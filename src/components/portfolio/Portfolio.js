import "./portfolio.css";
import { data } from "../../utils/data.js";
import LinkIcon from "@mui/icons-material/Link";
import WorkIcon from "@mui/icons-material/Work";

const Portfolio = () => {
  const handleClick = (el) => {
    if (el.id === 1) {
      window.open("https://hartoebuti.herokuapp.com/");
      console.log(el);
    }
    if (el.id === 2) {
      window.open("https://netflix-clone-repleyva.netlify.app/");
      console.log(el);
    }
  };
  return (
    <section id="portfolio" className="port-container">
      <div className="port-container-title">
        <h2>Portfolio</h2>
        <WorkIcon className="port-icon" />
      </div>
      <div className="gallery-container">
        {data.map((el, key) => (
          <figure
            key={key}
            className="gallery__item card"
            onClick={() => handleClick(el)}
          >
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
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
