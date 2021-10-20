import React, {Component} from "react"
import jediCssStyles from './Jedi.module.css'


class Jedi extends Component {
    render(){
        return (
            //<div className="Jedi" style={jediStyle}>
            <div className={jediCssStyles.Jedi}>
                <p onClick = {this.props.click}>I'm {this.props.name}, and spent time as a jedi for {this.props.age} years.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange = {this.props.changed} value={this.props.name} />
            </div>
        )
    }

    
}

export default Jedi;