import React from "react"
//import './Jedi.css'
import styled from "styled-components"


const StyledDiv = styled.div`
                                width: 60%;
                                margin: 16px auto;
                                border: 1px solid #eee;
                                box-shadow: 0 2px 3px #ccc;
                                padding: 16px;
                                text-align: center;

                                {
                                    '@media (min-width: 500px)':{
                                        width : '450px'
                                }
                            `


return (
    //<div className="Jedi" style={jediStyle}>
    <StyledDiv>
        <p onClick = {props.click}>I'm {props.name}, and spent time as a jedi for {props.age} years.</p>
        <p>{props.children}</p>
        <input type="text" onChange = {props.changed} value={props.name} />
    </StyledDiv>
)}

export default jedi;