import Prompt from './Prompt.tsx';
import BlinkingCursor from './BlinkingCursor.tsx';

function Terminal(props) {
    return (
        <span>
            <Prompt directory={props.directory}/>
            <BlinkingCursor />
        </span>
    );
}

export default Terminal;
