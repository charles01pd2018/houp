// partials
import Icons from '../icon/icons';

// dependencies
import { useState } from 'react';

// input prompt section
const Inputs = ({
    inputLabels
}) => {

    // add regex for input fields

    // set the default input state to the first question in the array
    const [ inputState, setInputState ] = useState(0);

    const [ inputText, inputFieldText ] = [ inputLabels[inputState].inputText, inputLabels[inputState].inputFieldText ]

    return (
        <>
                    <div className='component-wrapper'>
                        <div className='input-field-wrapper'>
                            <span className='input-field-title'>
                                <h1>{inputText}</h1> 
                            </span>

                            <div className='input-field-area'>
                                <input 
                                type='text'
                                className='input-text'
                                placeholder={inputFieldText}
                                key={inputText}
                                name={inputText}
                                id={inputText}
                                autoFocus/>
                            </div>
                        </div>
                        
                        <Icons inputLabels={inputLabels} inputState={inputState} setInputState={setInputState}/>
                    </div>
        </>
    );
}

export default Inputs;