import { useEffect } from "react";
import { useState } from "react";
import "./scrolltop.css";
import { Link, animateScroll as scroll } from "react-scroll";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { makeStyles } from "@mui/styles";

const Scrolltop = () => {
  const [scrollY, setscrollY] = useState(0);
  const classes = useStyles();

  useEffect(() => {
    const detectarScroll = () => setscrollY(window.pageYOffset);
    window.addEventListener("scroll", detectarScroll);
    return () => {
      window.removeEventListener("scroll", detectarScroll);
    };
  }, [scrollY]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      className={scrollY > 114 ? `${classes.btnScroll} scroll-top-btn` : "hidden"}
      onClick={scrollToTop}
    >
      <ArrowDropUpIcon className={`${classes.icon} icon-scroll`} />
    </button>
  );
};

const useStyles = makeStyles((theme) => ({
  btnScroll: {
		"&:hover": {
			color: "#000",
		}
	},
}));

export default Scrolltop;
