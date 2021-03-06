// combined state icons
import StateIcon from './stateIcon';

const Icons = ({
    inputLabels,
    setInputState
}) => {

    return (
        <div className='icons-wrapper'>
            {
                inputLabels.map( ({ inputText, inputFieldText }, index ) => (
                        <span className='icon' key={`icon-${index}`}>
                            <StateIcon inputState={index} setInputState={setInputState} iconTitle={inputText} />
                        </span>
                    ))
            }
        </div>

    );
}

export default Icons;