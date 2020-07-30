import React from 'react';
import './Mainpage.css';
import './Logo.css';
import Logo from './Logo';
import { Link } from "react-router-dom";




const header = () => {
  return(
  <div className = "header">
    <div className="nav">
    <Logo />
        <ul>
            <li><Link to="/intro">소개글</Link></li>
             <li><Link to = "/Preview">PRIVIEW</Link></li>
             <li><Link to = "/Mypage">마이페이지</Link></li>
             <li><Link to = "/Login" ><div id="nav_Log">로그인</div></Link></li>
        </ul>
    </div>
 </div>
)
}

export default header;