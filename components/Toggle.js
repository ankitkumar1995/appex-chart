import React from "react";
import "../App.css";

const Toggle=props=>{
    return(
        <button className="toggle__button" onClick={props.click}>
            <div className="toggle__button-line"/>
            <div className="toggle__button-line"/>
            <div className="toggle__button-line"/>
        </button>
    )
}

export default Toggle;
