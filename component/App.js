import React from "react";
import Form from "./Form";

function App() {
    const input1 = '<Input />';
    const input2 = '<Input error />';
    const input3 = '<Input disabled />';
    const input4 = '<Input helperText= "Some interesting text" />';
    const input5 = '<Input helperText= "Some interesting text" error />';
    const input6 = '<Input startIcon />';
    const input7 = '<Input endIcon />';
    const input8 = '<Input value= "text" />';
    const input9 = '<Input size= "sm" />';
    const input10 = '<Input size= "md" />';
    const input11 = '<Input fullWidth />';
    const input12 = '<Input multiline row= "4" />';
    return (
        <div>
            <h1>Form Inputs</h1>
            <form>
                { input1 }
                <Form inputs="1" />

                { input2 }
                <Form inputs="error" />

                {input3 }
                <Form inputs="disabled" />

                { input4 }
                <Form inputs="someInterestingText" />

                { input5 }
                <Form inputs="someInterestingTextError" />
                
                {input6 }
                <Form inputs="startIcon" />

                { input7 }
                <Form inputs="endIcon" />

                { input8 }
                <Form value="text" />
                
                {input9 }
                <Form size="sm" />

                { input10 }
                <Form size="md" />

                { input11 }
                <Form inputs="fullWidth" />
                
                {input12 }
                <Form row="row" />
            </form>
        </div>

    )
}

export default App