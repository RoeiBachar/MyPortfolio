import "./Card.css";
import quiz from "../../img/ezgif-4-03cad0a6b3.gif";
import { cardInterface } from "../../interfaces/cardInterface";

function Card(props: cardInterface): JSX.Element {
  return (
    <div className="Card">
      <div id="cardContainer">
        <div id="titleCard">
          <h1>{props.name}</h1>
        </div>
        <div id="info">
          <p>{props.info}</p>
        </div>
        <div id="mainCardContainer">
          <div id="skils">
            {props.skils.map((item) => (
              <p>⭐{item}</p>
            ))}
          </div>
          <div id="photoCard">
            <img src={props.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
