import Main from "../Main/Main";
import "./Routing.css";
import About from "../About/About";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Routing;
