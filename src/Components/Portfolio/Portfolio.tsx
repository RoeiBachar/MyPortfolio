import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Portfolio.css";
import { cardData } from "../../data/cardData";

function Portfolio(): JSX.Element {
  return (
    <div className="Portfolio">
      <div
        id="portfolioCaption"
        style={{
          paddingBottom: "1rem",
        }}
      >
        <p className="text-effect">
          I am proud to present my portfolio,which includes technologies such as
          React, Firebase, TypeScript, and more.
        </p>
      </div>
      <div id="cards">
        {cardData.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
