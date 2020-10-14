import React from "react";
import Form from "./Form";
import Textarea from "./Textarea";

function App() {
    const inputDefault = '<Input />'
    const input1 = '<Input error />';
    const input2 = '<Input disabled />';
    const input3 = '<Input helperText= "Some interesting text" />';
    const input4 = '<Input helperText= "Some interesting text" error />';
    const input5 = '<Input startIcon />';
    const input6 = '<Input endIcon />';
    const input7 = '<Input value= "text" />';
    const input8 = '<Input size= "sm" />';
    const input9 = '<Input size= "md" />';
    const input10 = '<Input fullWidth />';
    const input11 = '<Input multiline row= "4" />';

    return (
        <div>
            <h1>Form Inputs</h1>
            <form>
                <div>
                    { inputDefault }
                    <Form 
                        inputs="1" 
                        type="text" 
                        placeholder="Placeholder" 
                    />
                </div>
                
                <div className="gridColomn">
                    { input1 }
                    <Form 
                        inputs="error" 
                        type="text" 
                        placeholder="Placeholder" 
                        color="error-color" 
                    />
                </div>

                <div className="gridColomn">
                    {input2 }
                    <Form 
                        inputs="disabled" 
                        type="text" 
                        placeholder="Placeholder" 
                    />
                </div>

                <div className="gridColomn">
                    { input3 }
                    <Form 
                        inputs="someInterestingText" 
                        type="text"
                        placeholder="Placeholder"
                        text="Some interesting text"
                    />
                </div>

                <div>
                    { input4 }
                    <Form 
                        inputs="someInterestingTextError" 
                        type="text" 
                        placeholder="Placeholder" 
                        color="error-color" 
                        text="Some interesting text"/>
                </div>

                <div>                
                    {input5 }
                    <Form 
                        inputs="startIcon" 
                        type="text" 
                        placeholder="Placeholder" 
                    />
                </div>

                <div>
                    { input6 }
                    <Form 
                        inputs="endIcon" 
                        type="text" 
                        placeholder="Placeholder" />
                </div>

                <div>
                    { input7 }
                    <Form 
                        value="text" 
                        type="text" 
                        placeholder="Text" 
                    />
                </div>

                <div className="gridColomn">                
                    {input8 }
                    <Form 
                        size="sm" 
                        type="text" 
                        placeholder="Placeholder" 
                    />
                </div>

                <div>
                    { input9 }
                    <Form 
                        size="md" 
                        type="text" 
                        placeholder="Placeholder"
                    />
                </div>

                <div className="fulwidth">
                    { input10 }
                    <Form 
                        inputs="fullWidth" 
                        type="text" 
                        placeholder="Text" 
                    />
                </div>

                <div className="textareaClass gridColomn">                
                    { input11 }
                    <Textarea />
                </div>
            </form>
        </div>

    )
}

export default App