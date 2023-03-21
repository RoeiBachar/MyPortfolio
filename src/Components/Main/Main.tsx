import Header from "../Header/Header";
import Home from "../Home/Home";
import "./Main.css";

function Main(): JSX.Element {
    return (
        <div className="Main">
           <div id="mainContainer">
           <Header/>
            <Home/>
            </div> 
          
        </div>
    );
}

export default Main;
