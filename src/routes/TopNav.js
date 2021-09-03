import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import App from "../App";
import "../css/Nav.css";
import anime from "animejs/lib/anime.es.js";

// function Nav2(){
//     return (
// <div class="nav">
//     <ul class="top--nav">
//         <li><div class="left--nav"><h1><Link to="/">환경마라톤</Link></h1></div></li>

//         <li class="main--nav">
//             <li class="nav--Element"><Link to="/AboutUs">About Us</Link></li>
//             <li class="nav--Element"><Link to= "/attend">Attend</Link></li>
//             <li class="nav--Element"><Link to="/MyPage">My Page</Link></li>
//         </li>

//         <div class="right--nav">
//             <li><Link to="/login">로그인</Link></li>
//         </div>
//     </ul>
//</div>
//     );
// }

function TopNav() {
  return (
    <Nav defaultActiveKey="/home" as="ul" className="nav-container">
      <Nav.Item as="li">
        <Nav.Link href="/home">
          <h1 className="nav-h1">
            <div class="main_titl_1">Eco</div>Toner
          </h1>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <li class="nav--Element">
          <Link to="/AboutUs">About Us</Link>
        </li>
      </Nav.Item>
      <Nav.Item as="li">
        <li class="nav--Element">
          <Link to="/attend">Attend</Link>
        </li>
      </Nav.Item>
      <Nav.Item as="li">
        <li class="nav--Element">
          <Link to="/MyPage">My Page</Link>
        </li>
      </Nav.Item>
      <Nav.Item>
        <Button variant="success" className="login-btn">
          <Link to="/login" id="login-txt">
            Login
          </Link>
        </Button>
      </Nav.Item>
    </Nav>
  );
}

function MainContent() {
  useEffect(() => {
    anime({
      targets: ".anime-container",
      translateX: ["-40vw", "0"],
      easing: "easeOutQuad",
      duration: 800,
    });
  });

  return (
    <div className="main-content-container">
      <div className="anime-container">
        <h1>당신의 나무를 키워보세요</h1>
        <p>대회 참가자 조회하기</p>
        <div className="main-form-contaner">
          <InputGroup className="mb-3">
            <FormControl
              className="main-form-control"
              placeholder="조회하고자 하는 참가자의 이름을 입력하시오"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}

export { MainContent };
export default TopNav;
