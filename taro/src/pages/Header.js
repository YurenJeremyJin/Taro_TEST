import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {

    return (
    <header className="header">
     <div className="header_content">
       <div className="inner">
                <NavLink to="/">Home</NavLink>
         &ensp; <span>
                  <button type="button" id="login">
                    <NavLink to="/Login" id="login_text">To Log in</NavLink>
                  </button>
                </span>
         &ensp; <span>
                <button type="button"><a id="signup_text">Join Now</a></button>
                </span>
       </div>
     </div>
    </header>
  );
}

export default Header;