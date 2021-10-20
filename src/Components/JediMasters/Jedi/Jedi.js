import React from "react"
import jediCssStyles from './Jedi.module.css'


const jedi = (props) =>{
    console.log('[Jedi.js] rendering...')
    return (
        //<div className="Jedi" style={jediStyle}>
        <div className={jediCssStyles.Jedi}>
            <p onClick = {props.click}>I'm {props.name}, and spent time as a jedi for {props.age} years.</p>
            <p>{props.children}</p>
            <input type="text" onChange = {props.changed} value={props.name} />
        </div>
    )
}

export default jedi;