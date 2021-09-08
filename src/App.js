import React from 'react';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './routes/TopNav';

import AttendSubmit, {SubmitResult} from './routes/AttendSubmit';
import Attend from './routes/Attend';
import SignUp from './routes/SignUp';
import Home from './routes/Home'
import AboutUs from './routes/AboutUs';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import GoogleButton from './routes/GoogleButton';
import { BrowserRouter, Switch , Redirect } from "react-router-dom";
import GoogleBtn from './routes/GoogleButton';


function App() {
  return (
    <BrowserRouter>
      <TopNav />  
      <Route path="/" exact = {true} component={ Home } />
      <Route path="/MyPage" exact = {true} component={MyPage}/>
      <Route path="/SignUp" component = { SignUp } />
      <Route path="/Attend" component={ Attend }/>
      <Route path="/AboutUs" component={AboutUs}/>
      <Route path="/Login" component={Login} />
      <Route path="/AttendSubmit" component={ AttendSubmit }/>
      <Route path="/SubmitResult" component={ SubmitResult }/>

      {/* 구글 로그인 관련*/}
      <Route path="/GoogleLogin" component={ GoogleBtn }/>
    </BrowserRouter>
  );
}

export default App;
