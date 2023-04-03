import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Portfolio.css";
import quiz from "../../img/ezgif-4-03cad0a6b3.gif";

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
        <Card
          name="Football Quiz"
          info="Do you think you know everything about football? Try to solve the
            quiz without making any mistakes and you'll be crowned the kings of
            football!"
          image={quiz}
          skils={["React", "TypeScript", "CSS - Flex"]}
        />
        {/* <Card/>
      <Card/> */}
      </div>
    </div>
  );
}

export default Portfolio;
