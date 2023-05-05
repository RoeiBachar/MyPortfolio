import "./Home.css";
import "../../../src/";
function Home(): JSX.Element {
  return (
    <div className="Home">
      <h1 id="title"> I'm Roei Bachar</h1>
      <h2 id="roleTitle"> React Developer</h2>
      <p id="descriptionTitle">
        Whether you're a potential employer or a fellow developer, this
        portfolio website provides a comprehensive overview of my React skills
        and my dedication to staying up-to-date with the latest industry trends.
      </p>
      <a target="_blank" href="https://www.linkedin.com/in/roeibachar1/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </a>
    </div>
  );
}

export default Home;
