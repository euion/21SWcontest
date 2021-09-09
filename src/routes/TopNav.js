import React, { useEffect } from "react";
import { Link, Switch } from "react-router-dom";
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import {LogoutBtn} from './Login';
import "../css/Nav.css";
import anime from "animejs/lib/anime.es.js";
import LoginStatus from "./LoginStatus";

function TopNav() {
    return (
      <Nav defaultActiveKey="/" as="ul" className="nav-container">
        <Nav.Item as="li">
          <Nav.Link>
            <Link to ="/" className="home-link"> 
              <h1 className="nav-h1">
                <div className="home-link"><div class="main_titl_1">Eco</div>Toner</div>
              </h1>            
            </Link>
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
          <LoginStatus/> 
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