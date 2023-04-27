import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Portfolio.css";
import quizPc from "../../img/ezgif-4-03cad0a6b3.gif";
import adamSandlerPc from "../../img/12.png";
import yummitPc from "../../img/yummitgif.gif";
import adamSandlerIphone from "../../img/iphone.png";


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
          name="Adam Sandler"
          info="This Adam Sandler website is a comprehensive online resource for fans of the actor and comedian. The site features detailed information about Adam Sandler's life, including his early years, his rise to fame in Hollywood, and his current work in the entertainment industry. It also includes a thorough listing of his filmography, complete with plot summaries, ratings, and reviews from fans and critics alike. With its sleek and user-friendly design, 
          this website is the perfect destination for fans of Adam Sandler who want to learn more about the actor and his movies."
          imagePc={adamSandlerPc}
          imageIphone={adamSandlerIphone}
          skils={[
            "React",
            "TypeScript",
            "FireBase",
            "Redux-TK",
            "Router + Hash",
            "CSS - Flex",
          ]}
        />
        <Card
          name="Yummit"
          info="This website is about a dedicated and adorable student who has started a cake-making business. With a great deal of love and investment, she puts all her passion into baking delicious cakes for her customers. Her hard work and commitment to her craft are evident in the mouth-watering cakes she creates. Her customers are sure to enjoy every bite of her scrumptious treats."
          imagePc={yummitPc}
          skils={[
            "React",
            "TypeScript",
            "Web Storage",
            "Router",
            "Material UI",
            "Canva",
          ]}
        />
        <Card
          name="Football Quiz"
          info="Do you think you know everything about football? Try to solve the
            quiz without making any mistakes and you'll be crowned the kings of
            football!"
          imagePc={quizPc}
          skils={["React", "TypeScript", "CSS - Flex"]}
        />
      </div>
    </div>
  );
}

export default Portfolio;
