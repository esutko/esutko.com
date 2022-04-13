import { isPropertySignature } from 'typescript';
import Prompt from './Prompt.tsx';

function Terminal(props) {
    return (
      <Prompt directory={props.directory}/>
    );
}

export default Terminal;
