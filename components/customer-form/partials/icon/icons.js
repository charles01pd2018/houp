// combined state icons

import StateIcon from './stateIcon';

const Icons = ({
    numIcons
}) => {

    return (
        <div className='icons-wrapper'>
            {
                Array(numIcons).fill()
                    .map( (_, i) => (
                        <span className='icon' key={`icon-${i}`}>
                            <StateIcon />
                        </span>
                    ))
            }
        </div>

    );
}

export default Icons;