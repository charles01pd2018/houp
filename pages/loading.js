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
                <img src="/favicon.svg" alt="houp Logo Animation" className={`${animationType}-loading`}/>
             </span>
        </div>
    );
}

export default Loading;
