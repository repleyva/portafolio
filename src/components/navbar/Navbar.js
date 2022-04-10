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
import { navbar } from "../../utils/data";

const Navbar = () => {
  const classes = useStyles();
  return (
    <nav className="nav">
      <ul className="ul-nav">
        {navbar.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link
              className="nav-link"
              activeClass={`${classes.active}`}
              spy={true}
              to={item.to}
              smooth={true}
              offset={0}
              duration={500}
            >
              {item.to === "banner" && <Home className={classes.icon} />}
              {item.to === "profile" && <PersonPin className={classes.icon} />}
              {item.to === "skills" && <Code className={classes.icon} />}
              {item.to === "portfolio" && (
                <PhotoLibrary className={classes.icon} />
              )}
              {item.to === "contact" && (
                <InsertComment className={classes.icon} />
              )}
              <span className={"nav-span " + item.active}>
                {item.title.toUpperCase()}
              </span>
            </Link>
          </li>
        ))}
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
