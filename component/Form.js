import React from "react";

function Form(props) {
    let classes = props.inputs ? `input input--${props.inputs}` : 'input';;
    if(props.value) {
        classes = `${classes} input--text`;
    }

    if(props.size) {
        classes = `${classes} input--${props.size}`;
    }

    if(props.row) {
        classes = `${classes} input--${props.row}`;
    }

    return (
        <div className= "labelLayout">
            <label>
                <span className={props.color}>Label</span>
                <input type="text" placeholder="Placeholder" className={classes}/>
            </label>
        </div>
    ) 
}

export default Form