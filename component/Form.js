import React from "react";

import Icons from "./Icons";

function Form(props) {
    let classes = props.inputs ? `input input--${props.inputs}` : 'input';
    if(props.value) {
        classes = `${classes} input--text`;
    }

    if(props.size) {
        classes = `${classes} input--${props.size}`;
    }

    if(props.row) {
        classes = `${classes} input--${props.row}`;
    }

    const fontSize = {
        fontSize : "14px"
    }

    return (
        <div className= "labelLayout">
            <label>
                <span className= {props.color}>Label</span>
                {/* { props.startIcon ? <Icons name={props.startIcon} /> : "" } */}
                <input 
                    type= {props.type} 
                    placeholder= {props.placeholder} 
                    className={classes}
                />
                <span 
                    className= {props.color} 
                    style={fontSize}>
                        {props.text}
                </span>
            </label>
        </div>
    ) 
}

export default Form