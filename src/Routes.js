import React from 'react';
import Main from './Main_div';
import {BrowserRouter as Router,Route}from 'react-router-dom';

import Header from './Header'
import Login from './Login';
import Intro from './Intro';
import Join from'./Join';
import Search from './Search';



export default () => (
    <Router>
        <Header />
            <Route path ="/Main" exact={true} component={Main}/>
            <Route path="/Login" exact={true}  component ={Login}/>
            <Route path ="/intro" exact={true} component ={Intro}/>
            <Route path ="/Preview" exact={true} component = {Main}/>
            <Route path = "/Mypage" exact={true} component={Main}/>
            <Route path ="/Join" exact={true} component ={Join}/>
            <Route path = "/Search" exact={true} component ={Search}/>
    </Router>
)
