import Main from "../Main/Main";
import "./Routing.css";
import About from "../About/About";
import { Routes, Route } from "react-router-dom";
import Portfolio from "../Portfolio/Portfolio";

function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="*" element={<Main />} />
      </Routes>
    </div>
  );
}

export default Routing;
