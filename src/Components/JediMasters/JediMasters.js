import React from "react";
import Jedi from './Jedi/Jedi'


const jediMasters = (props) => (props.jedies.map((jedi, index) => {
        return <Jedi click={() => props.click(index)} 
        name = {jedi.name} 
        age={jedi.age}
        key={jedi.id}
        changed = {(event) => props.changed(event, jedi.id)}
        />
})

);

export default jediMasters