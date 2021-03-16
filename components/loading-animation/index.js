
const LoadingAnimation = ({
    animationType,
    loadingTitle
}) => {

    return (
        <section className='container'>
            <div className='loading-wrapper'>
                <span className='loading-title'>
                    <h1>{loadingTitle}</h1>
                </span>
                <div className='loading-icon'>
                    <object type="image/svg+xml" data={`${animationType}Animation.svg`} className={`${animationType}-loading`} >
                        {animationType} Logo Loading Animation
                    </object>
                </div>
            </div>
        </section>
    );
}

export default LoadingAnimation;