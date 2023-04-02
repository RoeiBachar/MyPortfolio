import "./Card.css";
import quiz from "../../img/ezgif-4-03cad0a6b3.gif";

function Card(): JSX.Element {
  return (
    <div className="Card">
      <div id="cardContainer">
        <div id="titleCard">
          <h1>Football Quiz</h1>
        </div>
        <div id="info">
          <p>
            Do you think you know everything about football? Try to solve the
            quiz without making any mistakes and you'll be crowned the kings of
            football!
          </p>
        </div>
        <div id="mainCardContainer">
          <div id="skils">
            <p>⭐React</p>
            <p>⭐TypeScript</p>
            <p>⭐CSS - Flex</p>
          </div>
          <div id="photoCard">
            <img src={quiz} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
