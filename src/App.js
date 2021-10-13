import "./App.css";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Profile from "./components/profile/Profile";
import Scrolltop from "./components/scrolltop/Scrolltop";
import Skills from "./components/skills/Skills";

function App() {

  return (
    <div className="App">
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

export default App;
