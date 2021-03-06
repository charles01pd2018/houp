import Icons from '../icon/icons';

const Inputs = ({
    inputLabels
}) => {

    // add regex for input fields

    return (
        <>
            {
                inputLabels.map( ({ inputText, inputFieldText }) => (
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
                        
                        <Icons numIcons={3}/>
                    </div>
                ))
            }
        </>
    );
}

export default Inputs;