import { useEffect } from "react";
import { useState } from "react";
import "./scrolltop.css";
import { Link, animateScroll as scroll } from "react-scroll";

const Scrolltop = () => {
  const [scrollY, setscrollY] = useState(0);

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
      className={scrollY > 114 ? "scroll-top-btn" : "hidden"}
      onClick={scrollToTop}
    >
      &#11014;
    </button>
  );
};

export default Scrolltop;
