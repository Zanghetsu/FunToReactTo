import React from "react"
import CockpitCss from './Cockpit.module.css'

const cockpit = ( props ) => {

    
    let classes = []
    let buttonStyle = ''

    if( !props.showJediMasters ){
        buttonStyle = CockpitCss.Red
    }

    if(props.jedies.length <= 2){
      classes.push(CockpitCss.red)
    }
    if(props.jedies.length <= 1){
      classes.push(CockpitCss.bold)
    }

    return( 
        <div className={CockpitCss.Cockpit}>
            <h1>Hello there!</h1>
            <p className={classes.join(' ')}>Styling experiment</p>
            <button className={buttonStyle} onClick={props.click}>Get Jedi Masters!</button>
        </div>
    )
}


export default cockpit