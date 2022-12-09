import React from "react";
import Logo from './pics/Taro.png';

export default function Footer () {
    return (
     <div className="footer">
       <img id="logo" src={Logo} alt={"logo"}/>
        <div className="footer_container">
         <span id="contact">Contact Us</span> &emsp;
         <span id="team">Our Team</span> &emsp;
         <span>@2022 by Taro</span>
        </div>
    </div>
  );
}