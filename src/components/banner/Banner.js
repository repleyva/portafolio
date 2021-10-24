import { makeStyles } from "@mui/styles";
import { init } from "ityped";
import { memo, useEffect, useRef } from "react";
import "./banner.css"

const Banner = () => {
  const classes = useStyles();
	const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true, // muestra el cursor
      backDelay: 2000, // tiempo en pintar y borrar el contenido
      backDelay: 500, // tiempo ue demora en borrar la palabra
      strings: [
        "Hi, I'm Rusvel Pasos / FrontEnd Dev",
        "HTML/CSS/JS Lover",
        "React.js Lover",
        "Java Dev Junior",
        "Python Dev Junior",
      ], // contenido a mostrar
    });
  }, []);

  return (
    <section id="banner" className={classes.root}>
      <div className={classes.fadeTop}></div>
      <div className={classes.container}>
        <div className={classes.containerInfo}>
          <h1 className={classes.title}>Repleyva</h1>
          <h4 className={classes.desc}>
            <span ref={textRef}></span>
          </h4>
        </div>
      </div>
      <div className={classes.fadeBottom}></div>
    </section>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    /* backgroundColor: "#000", */
    backgroundImage: `url(assets/banner.png)`,
    width: "100%",
    height: "calc(100vh - 90px)",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    ["@media (max-width:760px)"]: {
      backgroundPosition: "right",
      height: "400px",
    },
  },

  container: {
    position: "absolute",
    zIndex: "30",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  },

  containerInfo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "10",
    width: "80%",
    height: "180%",
    padding: "2rem 0",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
		textShadow: "3px 3px 3px #008037",
    ["@media (max-width:1000px)"]: {
      width: "90%",
      height: "100%",
    },
  },

  title: {
    fontSize: "8rem",
    margin: "0",
    padding: "0",
    ["@media (max-width:1000px)"]: {
      fontSize: "3rem",
    },
  },

  desc: {
    fontSize: "1.5rem",
    fontWeight: "400",
    ["@media (max-width:1000px)"]: {
      fontSize: "1rem",
    },
  },

  fadeBottom: {
    position: "absolute",
    top: "30vh",
    bottom: "0",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
  },

  fadeTop: {
    position: "absolute",
    top: "0",
    bottom: "30vh",
    left: 0,
    right: 0,
    zIndex: 3,
    backgroundImage:
      "linear-gradient(0deg, transparent, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
  },
}));

export default memo(Banner);
