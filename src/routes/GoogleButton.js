import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Home from "./Home";
import axios from "axios";
// dovenv 사용하기(환경변수)
import dotenv from "dotenv";
dotenv.config();

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

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
          `${process.env.REACT_APP_BACK_END_URL}/login?ID_token=${this.state.accessToken}`
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
            />
          )}
          {this.state.accessToken
            ? console.log("로그인에 성공하였습니다") //알람때문에..테스트가힘들어서일단 console.log 로바꿈
            : null}
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
