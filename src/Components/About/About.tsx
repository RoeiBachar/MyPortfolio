import Header from "../Header/Header";
import "./About.css";
import Roeiimg from "../../img/279200114_2412729442226592_224565631605890770_n.jpg";
import IDFimg from "../../img/Badge_of_the_Israel_Defense_Forces.new.svg.png";
import ORT from "../../img/ort.png";
import JB from "../../img/tpasus.jpg";
import react from "../../img/react.png";
import redux from "../../img/redux.jpg";
import css from "../../img/css.png";
import ts from "../../img/Typescript_logo_2020.png";
import sql from "../../img/azure-sql2162.jpg";
import js from "../../img/28753ddf79d70042ba86564947e13bf5.png";
import firebase from "../../img/firebase.png";
import node from "../../img/node.webp";

function About(): JSX.Element {
  return (
    <div className="About">
      <div className="content">
        <h1>All you need to know about me</h1>
        <img className="blur" src={Roeiimg} />
        <p className="fade-in2">22 Years old, Live in Bat-Yam</p>
        <p className="fade-in3">
          Graduate of the John Bryce College full-stack web development course.
          Expertise in technologies such as React and TypeScript, NodeJS, and
          SQL.
        </p>
        
        <h2 className="fade-in6">
          Excellent team player, enjoy challenges, fast learner and diligent.
        </h2>
        <img className="fade-in7" id="idfImg" src={IDFimg} />
        <p className="fade-in7">
          During my military service, I made orders and approvals for the
          purchase of oils and fuels from factories both in Israel and abroad
          using the SAP system.
          This was done in coordination with the procurement and production
          administration at the Ministry of Defense for IDF bases throughout the
          country.
        </p>
        <div id="educationContainer">
          <div id="jbContainer">
            <img className="image-effect" id="jbImg"src={JB} />
            <h4>2022-2023</h4>
            <h2>John Bryce</h2>
            <span>(Collage, Tel Aviv)</span>
            <p>
              Full Stack development in WEB technologies and applications (Certificate)

            </p>
          </div>
          <div id="ortContainer">
            <img className="image-effect" id="ortImg" src={ORT} />
            <h4>2013 - 2019</h4>
            <h2>Ort Ramat Yosef</h2>
            <span>(High-School, Bat-Yam)</span>
            <p>
              Computer Software Engineering <span>(10 Units Certificate)</span>
            </p>
          </div>
        </div>
        <h1 className="text-effect">My Skills</h1>
        <div id="scrollImageContainer">
          <img src={css} />
          <img src={js} />
          <img src={react} />
          <img src={redux} />
          <img src={ts} />
          <img src={node} />
          <img src={sql} />
          <img src={firebase} />
        </div>
        <div id="contact" style={{ display: "flex", flexDirection: "column" }}>
          <span>Contact me</span>
          <span>☎</span>
          <span>054-4297959</span>
          <span>✉</span>
          <span>roeibachar972@gmail.com</span>
        </div>

      </div>
    </div>
  );
}

export default About;
