// partials
import StateIcon from './stateIcon';

// combined state icons
const Icons = ({
    inputLabels,
    inputState,
    setInputState
}) => {

    return (
        <div className='icons-wrapper'>
            {
                inputLabels.map( ({ inputText, inputFieldText }, index ) => (
                        <span className='icon' key={`icon-${index}`}>
                            <StateIcon iconIndex={index} inputState={inputState} setInputState={setInputState} iconTitle={inputText} />
                        </span>
                    ))
            }
        </div>
    );
}

export default Icons;