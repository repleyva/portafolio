import "./navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  Home,
  PersonPin,
  Code,
  PhotoLibrary,
  InsertComment,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className="nav">
      <ul className="ul-nav">
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass={`${classes.active}`}
            spy={true}
            to="banner"
            smooth={true}
            offset={-17}
            duration={500}
          >
            <Home className={classes.icon} />
            <span className="nav-span active-start">INICIO</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass={`${classes.active}`}
            spy={true}
            to="profile"
            smooth={true}
            offset={-17}
            duration={500}
          >
            <PersonPin className={classes.icon} />
            <span className="nav-span">RUSVEL PASOS</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass={`${classes.active}`}
            spy={true}
            to="skills"
            smooth={true}
            offset={-17}
            duration={500}
          >
            <Code className={classes.icon} />
            <span className="nav-span">HABILIDADES</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass={`${classes.active}`}
            spy={true}
            to="portfolio"
            smooth={true}
            offset={-17}
            duration={500}
          >
            <PhotoLibrary className={classes.icon} />
            <span className="nav-span">PORTAFOLIO</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass={`${classes.active}`}
            spy={true}
            to="contact"
            smooth={true}
            offset={-17}
            duration={500}
          >
            <InsertComment className={classes.icon} />
            <span className="nav-span">CONTACTO</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const useStyles = makeStyles((theme) => ({
  icon: {
    display: "none !important",
    ["@media (max-width:1000px)"]: {
      display: "block !important",
      fontSize: "1.2rem !important",
    },
  },

  active: {
    color: "var(--main-color) !important",
    backgroundColor: "white !important",
  },
}));

export default Navbar;
