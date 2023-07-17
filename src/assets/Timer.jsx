import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';


export const Timer = (props) => {

    let renderMap = [false, false, true, true];
    let labels = ['Minutes', 'Seconds'];

    function handleComplete() {
        console.log('finish');
    }


    return (
            <FlipClockCountdown to={new Date().getTime() + props.time}
                                onTick={props.tick}
                                renderMap={renderMap}
                                labels={labels}
                                labelStyle={{color: '#000000'}}
                                digitBlockStyle={{color: '#ffffff'}}
                                onComplete={handleComplete}>


            </FlipClockCountdown>
    );


};