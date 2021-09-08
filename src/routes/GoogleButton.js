import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import styled from "styled-components";
import {Link} from 'react-router-dom';
import Home from "./Home";


const CLIENT_ID = "743833643148-d1nk6t8tdbt489i89h8dn0j9o0v3o1fo.apps.googleusercontent.com";

class GoogleBtn extends Component {
    constructor(props) {
     super(props);
 
     this.state = {
       isLogined: false,
       accessToken: ''
     };
 
     this.login = this.login.bind(this);
     this.handleLoginFailure = this.handleLoginFailure.bind(this);
     this.logout = this.logout.bind(this);
     this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
   }
 
   login (response) {
     if(response.accessToken){
       this.setState(state => ({
         isLogined: true,
         accessToken: response.accessToken
       }));
     }
   }
 
   logout (response) {
     this.setState(state => ({
       isLogined: false,
       accessToken: ''
     }));
   }
 
   handleLoginFailure (response) {
     alert('Failed to log in')
   }
 
   handleLogoutFailure (response) {
     alert('Failed to log out')
   }
 
   render() {
     return (
     <div>
        <LoginContainer>
            { this.state.isLogined ?
                <GoogleLogout
                clientId={ CLIENT_ID }
                buttonText='Logout'
                onLogoutSuccess={ this.logout }
                onFailure={ this.handleLogoutFailure }
                >
                </GoogleLogout>: <GoogleLogin
                clientId={ CLIENT_ID }
                buttonText='Login'
                onSuccess={ this.login }
                onFailure={ this.handleLoginFailure }
                cookiePolicy={ 'single_host_origin' }
                responseType='code,token'
                />
            }
            { this.state.accessToken ? alert("로그인에 성공하였습니다"): null }
            </LoginContainer>
     </div>
     )
   }
 }
 
const LoginContainer = styled.div `
    display: flex;
    width:100px;
    height:50px;
`
export default GoogleBtn;