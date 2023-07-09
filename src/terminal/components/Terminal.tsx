import React from "react"
import Prompt from './Prompt.tsx';

function Terminal(props) {
    return (
        <Prompt directory={props.directory} input={props.input}/>
    );
}

export default Terminal;
