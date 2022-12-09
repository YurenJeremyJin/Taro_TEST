import React from "react";
import { NavLink } from 'react-router-dom';
import Sr from "./ScrollReveal";

export default function HomePage() {
    return (
        <>
        <div className="bottlepage">
            <span id="leftbox"><Sr>Be a Sponsor</Sr></span>
            <div id="middlebox_container">
                <div id="middlebox_text">
                 <span><Sr>Taro + ?</Sr></span>
                </div>
            </div>
            <span id="rightbox">
                <NavLink to="/Recipes" id="recipes_text"><Sr>Submit your Recipes</Sr></NavLink>
            </span>
        </div>
        </>
    );
}