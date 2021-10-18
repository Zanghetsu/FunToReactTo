import React from "react"
import { Children } from "react";

const person = (props) => {
    return (
        <div>
            <p1>I'm {props.name}, and spent time as a jedi for {props.age} years.</p1>
            <p1>{props.children}</p1>
        </div>
    )}

export default person;