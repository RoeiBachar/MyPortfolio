import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
           <Header/>
            <Home/>
          <Footer/>
        </div>
    );
}

export default Main;
