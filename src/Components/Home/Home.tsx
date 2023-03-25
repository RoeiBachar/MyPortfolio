import "./Home.css";
import "../../../src/"
function Home(): JSX.Element {
    const onButtonClick = () => {
        fetch('RoeiBacharResume-ReactDeveloper.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'RoeiBacharResume-ReactDeveloper.pdf';
                alink.click();
            })
        })
    }
  return (
    <div className="Home">
      <p id="title"> I'm Roei Bachar</p>
      <p id="roleTitle"> React Developer</p>
      <p id="descriptionTitle">
        Whether you're a potential employer or a fellow developer, this
        portfolio website provides a comprehensive overview of my React skills
        and my dedication to staying up-to-date with the latest industry trends.
      </p>
      <button onClick={onButtonClick}>Download CV</button>
      <p>OR</p>
      <a target="_blank" href="https://www.linkedin.com/in/roeibachar1/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/179/179330.png"
          width={100}
        />
      </a>
    </div>
  );
}

export default Home;
