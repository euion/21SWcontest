import React, { Component } from "react";
import styled from "styled-components";
import { useHistory,Link } from 'react-router-dom';
import { Nav, Button, InputGroup, FormControl } from "react-bootstrap";
import { LoginBtn, LogoutBtn } from "./Login";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

function LoginStatus(status) {
    if(status === true){    // 로그인 세션 유지시 
        return(
        <div className="logout-btn-align">
            <Button className="logout-btn" variant="primary" type="submit">
                Logout
            </Button>
        </div>
        )}else{
        return(     // 로그인 안되어 있을 경우!
        <Button variant="success" className="login-btn">
            <Link to="/login" id="login-txt">
            Login
            </Link>
        </Button>
        )
    }
}

export default LoginStatus;