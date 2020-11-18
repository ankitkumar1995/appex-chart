import React from "react";
import "../App.css";

const Sidebar = props =>{
    return(
        <nav className="sidebar"
        >
            <button className="cancel__button" onClick={props.click} >x</button>
            <h3 className="sidebar__heading">Dashboard</h3>
            <ul>
                <li><a href={"/"}>Home</a></li>
                <li><a href={"/about"}>About</a></li>
            </ul>
        </nav>
    )
}

export default Sidebar;