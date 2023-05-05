import "./Home.css";
import "../../../src/";
function Home(): JSX.Element {
  return (
    <div className="Home">
      <p id="title"> I'm Roei Bachar</p>
      <p id="roleTitle"> React Developer</p>
      <p id="descriptionTitle">
        Whether you're a potential employer or a fellow developer, this
        portfolio website provides a comprehensive overview of my React skills
        and my dedication to staying up-to-date with the latest industry trends.
      </p>
      <a target="_blank" href="https://www.linkedin.com/in/roeibachar1/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
          style={{maxWidth:"50%",height:"auto"}}
        />
      </a>
    </div>
  );
}

export default Home;
