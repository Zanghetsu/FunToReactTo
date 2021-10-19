import React from "react"
import './Jedi.css'
import Radium from "radium"

const jedi = (props) => {
    const jediStyle = {
        '@media (min-width: 500px)':{
            width : '450px'
        }
    }

    return (
        <div className="Jedi" style={jediStyle}>
            <p onClick = {props.click}>I'm {props.name}, and spent time as a jedi for {props.age} years.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name} />
        </div>
    )}

export default Radium(jedi);