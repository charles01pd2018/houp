// components
import LoadingAnimation from '../components/loading-animation';

// loading screen while data is fetching
const Loading = ({
    animationType,
    loadingTitle
}) => {

    return (
        <LoadingAnimation animationType={animationType} loadingTitle={loadingTitle} />
    );
}

export default Loading;
