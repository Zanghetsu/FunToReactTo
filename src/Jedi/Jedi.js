import React from "react"

const person = (props) => {
    return (
        <div>
            <p onClick = {props.click}>I'm {props.name}, and spent time as a jedi for {props.age} years.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name} />
        </div>
    )}

export default person;