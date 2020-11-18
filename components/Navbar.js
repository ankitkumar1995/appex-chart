import React from "react";
import "../App.css";
import Toggle from "./Toggle";

const Navbar = props =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <div className="toggle__button">
                <Toggle click={props.onClickHandler}/>
            </div>
            <a className="navbar-brand" href="/">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;
