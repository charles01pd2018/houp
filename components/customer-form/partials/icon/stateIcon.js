// dependencies
import { useRef, useState } from 'react';
import classNames from 'classnames';

// partials
import Bubble from './bubble';

// individual icon representing a form state
const StateIcon = ({
    iconIndex,
    inputState,
    setInputState,
    iconTitle
}) => {
    
    // ref state for icon interaction
    const iconRef = useRef(null);
    // bubble open state
    const [ isBubbleOpen, setIsBubbleOpen ] = useState(false);

    // redirect to the stored input page
    const iconClick = () => {
        setInputState(iconIndex);
    }

    const openBubble = () => {
        setIsBubbleOpen(true);
    }

    const closeBubble = () => {
        setIsBubbleOpen(false);
    }

    return (
        <>
            <span className='icon'>
                <span className={classNames('circle', iconIndex === inputState && 'active')} 
                    ref={iconRef} onClick={iconClick} onMouseEnter={openBubble} onMouseLeave={closeBubble}>
                    {
                        isBubbleOpen === true ? <Bubble bubbleTitle={iconTitle} /> : ( null )
                    }
                </span>
            </span>
        </>
    );
}

export default StateIcon;