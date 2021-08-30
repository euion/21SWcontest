import React from 'react';
import './App.css'
import { HashRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import TopNav from './routes/TopNav';
import Attend from './routes/Attend';
import Home from './routes/Home'
import AboutUs from './routes/AboutUs';
import MyPage from './routes/MyPage';
import Login from './routes/Login';

function App() {
  return (
    <HashRouter>
      <TopNav />
      <Route path="/" exact = {true} component={ Home } />
      <Route path="/MyPage" component={MyPage}></Route>
      <Route path="/Attend" component={Attend}></Route>
      <Route path="/AboutUs" component={AboutUs}></Route>
      <Route path="/Login" component={Login}></Route>
    </HashRouter>
  );
}

export default App;
