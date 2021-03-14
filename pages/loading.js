// loading screen while data is fetching
const Loading = ({
    animationType,
    loadingTitle
}) => {

    return (
        <div className='loading-wrapper'>
            <span className='loading-title'>
                <h1>{loadingTitle}</h1>
            </span>
            <span className='loading-icon'>
                <object type="image/svg+xml" data={`${animationType}Animation.svg`} className={`${animationType}-loading`} >
                    Houp Logo Animation 
                </object>
             </span>
        </div>
    );
}

export default Loading;
