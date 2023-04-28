import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Portfolio.css";
import adamSandlerPc from "../../img/12.png";
import adamSandlerIphone from "../../img/iphone.png";
import { cardData } from "../../data/cardData";



function Portfolio(): JSX.Element {
  return (
    <div className="Portfolio">
      <Header />
      <div id="portfolioCaption">
        <p className="text-effect">
          I am proud to present my portfolio,which includes technologies such as
          React, Firebase, TypeScript, and more.
        </p>
      </div>
      <div id="cards">
        {cardData.map((item)=>
    <Card {...item} />
        )}
       
    
      </div>
    </div>
  );
}

export default Portfolio;
