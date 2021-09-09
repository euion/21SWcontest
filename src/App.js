import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNav from "./routes/TopNav";

import AttendSubmit, { SubmitResult } from "./routes/AttendSubmit";
import Attend from "./routes/Attend";
import SignUp from "./routes/SignUp";
import Home from "./routes/Home";
import AboutUs from "./routes/AboutUs";
import MyPage from "./routes/MyPage";
import Login, { LoginBtn, LogoutBtn } from "./routes/Login";
import { BrowserRouter, Switch } from "react-router-dom";
import GoogleBtn from "./routes/GoogleButton";

function App() {
  if (window.performance) {
    if (performance.navigation.type == 1) {
      alert("This page is reloaded");
    } else {
      alert("This page is not reloaded");
    }
  }
  return (
    <BrowserRouter>
      <Route path="" exact={true} component={Home} />
      <Route path="/MyPage" exact={true} component={MyPage} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/Attend" component={Attend} />
      <Route path="/AboutUs" component={AboutUs} />
      <Route path="/Login" component={Login} />
      <Route path="/AttendSubmit" component={AttendSubmit} />
      <Route path="/SubmitResult" component={SubmitResult} />
      {/* 구글 로그인 관련*/}
      <Route path="/GoogleLogin" component={GoogleBtn} />
    </BrowserRouter>
  );
}

export default App;
