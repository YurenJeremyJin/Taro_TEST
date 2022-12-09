import React from "react";
import Bottle from "./Bottle"
import IntroPage from "./IntroPage";
import NewsnBlogs from "./NewsnBlogs"
import Links from "./Links";
import Footer from "./Footer";
import Logo from '../pages/pics/Taro.png';
import Sr from "./ScrollReveal";

export default function HomePage() {
      
    return (

    <div>

        <div className="homepage">
         <Sr style={{ }}>
         <img id="logo" src={Logo} alt={"logo"}/>
         <h2 id="test">Web3 Off Web</h2>
         </Sr>
        </div>

       <Sr style={{ }}>
       <Bottle/>
       </Sr>
       <Sr style={{ }}>
       <IntroPage/>
       </Sr>
       <NewsnBlogs/>
       <Sr style={{ }}>
       <Links/>
       </Sr>
       <hr/>
       <Footer/>
       
    </div>

    );
}

