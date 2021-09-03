import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header, { MainContent } from "./TopNav";
import "../css/Attend.css";
import anime from "animejs/lib/anime.es.js";

function Attend() {
  useEffect(() => {
    anime({
      targets: ".attend-main-container",
      translateX: ["-40vw", "0"],
      easing: "easeOutQuad",
      duration: 800,
    });
  });

  return (
    <div className="attend-about_container">
      <Header />
      <div class="attend-main-container">
        <h1>환경 마라톤이란?</h1>
        <p>
          {" "}
          환경 마라톤은 건강적인 측면을 생각하면서 주변에 쓰레기를 줍겠다는
          취지로 만들어진 운동입니다. 현재 이뤄지고 있는 언택트 환경 마라톤의
          개념을 확장 시켜, 웹 페이지를 통해 건강과 환경을 생각하는{" "}
          <b>'온택트 환경마라톤'</b> 으로 재탄생 시키고자 합니다.
        </p>
        <div>
          <Link to="/Attend" class="attend-attendBtn">
            신청하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Attend;
