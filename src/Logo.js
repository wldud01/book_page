import React from 'react';
import './Logo.css'
import { Link } from "react-router-dom";


const Logo = () =>{
    return(
        <div className="header_Logo">
            <Link to ='/Main'>LoGo</Link>
        </div>
    )
};

export default Logo;
