import React from "react";
import New_York from "./pics/New_York.png"
import Miami from "./pics/Miami.png"
import San_francisco from "./pics/San_francisco.png"
import Austin from "./pics/Austin.png"
import Sr from "./ScrollReveal";

export default function Links () {
    return (
        <div className="links">
         <div className="head-container">
          <span id="link_head"><h2>Links</h2></span>
          <span id="stores">Our Stores</span><br/>

         <Sr>
         <div className="store_locations">
          <span>
          <div className="container">
           <img id="New_York" src={New_York} alt={"New_York"}/>
            <div className="overlay">
             <div className="text">
                <h3>New York,</h3>
                <h3><font color='#FFFF00'>Time Square</font></h3><br/>
                Nothing is better when considering traffic and presentation. Time square is less cost-effective, but we believe the location is crucial and can possibly be highly profitable for all income channels.
             </div>
            </div>
           </div>
          </span> &nbsp;

          <span>
          <div className="container">
           <img id="Miami" src={Miami} alt={"Miami"}/>
            <div className="overlay">
             <div className="text">
                <h3>Miami,</h3>
                <h3><font color="#FF6666">Brickell</font></h3><br/>
                Miami is a rising star in crypto friendliness with young generation population flowing in from other states. The cost aspect of Miami is still very obtainable, and we selected Brickell as the target location for the denser traffic and atmosphere.
             </div>
            </div>
           </div>
          </span> &nbsp;
            
          <span>
          <div className="container">
           <img id="San_francisco" src={San_francisco} alt={"San_francisco"}/>
            <div className="overlay">
             <div className="text">
                <h3>San Franciso,</h3>
                <h3><font color="#33FFFF">Belden Place</font></h3><br/>
                We aim to locate among Union Square, Chinatown and Financial District to capture the most foot traffic, the area is also packed with tourism crowd with a decent acceptance rate to Asian culture eatery, which is perfect for us. 
             </div>
            </div>
           </div>
          </span> &nbsp;

          <span>
          <div className="container">
           <img id="Austin" src={Austin} alt={"Austin"}/>
            <div className="overlay">
             <div className="text">
                <h3>Austin,</h3>
                <h3><font color="#33FF00">Downtown</font></h3><br/>
                The city of Austin has quickly became a hub for talents in tech and web3, younger crowd are seen and not only do they have the spending power, a lot of them have experience with Asian food and drinks, and some of them are actually Asians. 
             </div>
            </div>
           </div>
          </span> &nbsp;
        </div>
        <span id="mystery_box">- Mystery Box</span>
        </Sr>
      </div>
    </div>
  );
}