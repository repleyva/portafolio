import "./App.css";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Scrolltop from "./components/scrolltop/Scrolltop";
import Skills from "./components/skills/Skills";
import { makeStyles } from "@mui/styles";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar />
      <Banner />
      <Profile />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Scrolltop />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "url(assets/fondo.jpg)",
    objectFit: "cover",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
		backgroundAttachment: "fixed"
  },
}));
export default App;
