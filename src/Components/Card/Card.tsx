import "./Card.css";
import { cardInterface } from "../../interfaces/cardInterface";
import git from "../../img/GitHub-Logo.jpg";
import website from "../../img/Screenshot_3.png";

function Card(props: cardInterface): JSX.Element {
  return (
    <div className="Card">
      <div id="cardContainer">
        <div id="skils">
          {props.skils.map((item) => (
            <p>⭐{item}</p>
          ))}
        </div>
        <div id="mainCardContainer">
          <div id="titleCard">
            <h1>{props.name}</h1>
          </div>
          <div id="info">
            <p>{props.info}</p>
          </div>
          <div id="photoCard">
            <img draggable="false"className="pc" src={props.imagePc} />
            <img draggable="false"className="phone" src={props.imageIphone} height={650} />
          </div>
        </div>

        <div id="links">
          <img draggable="false" src={git} width={300} />
          <img draggable="false" src={website} width={300} />
        </div>
      </div>
    </div>
  );
}

export default Card;
