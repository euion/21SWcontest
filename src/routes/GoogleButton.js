import React, { Component } from "react";
import { GoogleLogin, GoogleLogout,googleUser } from "react-google-login";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
// dovenv 사용하기(환경변수)
import dotenv from "dotenv";
import TopNav from "./TopNav";
import { LoginBtn } from "./Login";
import LoginStatus from "./LoginStatus";
dotenv.config();

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

// var profile = googleUser.getBasicProfile();


// this.id = profile.getBasicProfile();
// var username = profile.getName();
// var imageURL = profile.getImageUrl();
// var useremail = profile.getEmail();

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  
  login(response) {
    if (response.accessToken) {
      this.setState((state) => ({
        isLogined: true,
        accessToken: response.tokenId, //여기 accessToken 아니라 tokenId 값을 저장해야됨
      }));
      // 구글로그인에 성공했다면, 해당 유저의 tokenId를 백엔드서버에 보내서, 유효성검사를 한뒤 유저의 프로필을 받아옴
      axios
        .get(
          `${process.env.REACT_APP_BACK_END_URL}/google-login?ID_token=${this.state.accessToken}`
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => console.log(err));
    }
  }

  logout(response) {
    this.setState((state) => ({
      isLogined: false,
      accessToken: "",
    }));
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }

  render() {
    if (this.props.data) {
      var commentNodes = this.props.data.map(function (comment){
          return (
            <div>
              <h1>{comment.username}</h1>
            </div>
          );
      });
    }
    return (
      <div>
        <LoginContainer>
          {this.state.isLogined ? (
            <GoogleLogout
              clientId={CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.logout}
              onFailure={this.handleLogoutFailure}
            ></GoogleLogout>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              cookiePolicy={"single_host_origin"}
              responseType="code,token"
              redirectUri = {Home}
              to={LoginStatus(true)}
            />
          )}
          {this.state.accessToken
            ?<Redirect to={Home}/> // 로그인이 되면 홈으로 리다이렉트
            : console.log("로그아웃 상태입니다.")}
        </LoginContainer>
      </div>
    );
  }
}

const LoginContainer = styled.div`
  display: flex;
  width: 100px;
  height: 50px;
`;

export default GoogleBtn;
