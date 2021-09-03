import React from "react";
import Header, { MainContent } from "./TopNav";
import "../css/Home.css";
import cloud from "../img/Cloud.svg";
import cloud2 from "../img/Cloud2.svg";
import anime from "animejs/lib/anime.es.js";
class Home extends React.Component {
  componentDidMount() {
    anime({
      targets: ".first",
      translateX: ["-20vw", "100vw"],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 50000,
    });

    anime({
      targets: ".second",
      translateX: ["-10vw", "100vw"],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 50000,
    });

    anime({
      targets: ".third",
      translateX: ["0", "-100vw"],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 50000,
    });
    anime({
      targets: ".fourth",
      translateX: ["-30vw", "-100vw"],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 50000,
    });
  }

  render() {
    return (
      <div className="background-img">
        <Header />,
        <MainContent />
        <div className="cloud first">
          <img src={cloud} alt="" />
        </div>
        <div className="cloud second">
          <img src={cloud} alt="" />
        </div>
        <div className="cloud third">
          <img src={cloud2} alt="" />
        </div>
        <div className="cloud fourth">
          <img src={cloud2} alt="" />
        </div>
      </div>
    );
  }
}

export default Home;
