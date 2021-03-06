// this is where the state of the question will be tracked

const StateIcon = ({
    inputState,
    setInputState,
    iconTitle
}) => {
    
    // redirect to the stored input page
    const iconClick = () => {
        setInputState(inputState);
        
        console.log(iconTitle);
    }

    // on hover, display label title

    return (
        <span className='icon' onClick={iconClick}>
            <span className='circle'></span>
        </span>
    );
}

export default StateIcon;