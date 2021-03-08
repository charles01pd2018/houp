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
            <span className={`${animationType}-loading loading-icon`}></span>
        </div>
    );
}

export default Loading;
