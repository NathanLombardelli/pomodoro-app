import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


export const Timer = (props) => {

    return (

        // eslint-disable-next-line react/prop-types
        <FlipClockCountdown to={new Date().getTime() + props.time*60000} />

    );


};