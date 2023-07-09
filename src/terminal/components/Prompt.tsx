import React from "react"

function Prompt(props) {
    return (
        <span>
            <span className='Prompt'> [user@esutko.com {props.directory}]$ </span>
            {props.input}
            <span className="BlinkingCursor"> &#x2588; </span>
        </span>
    );
}

export default Prompt;
