
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

export const TimerStop = (props) => {

  let minutesFirstDigit = Math.trunc(props.timerMin/10);
  let minutesSecondDigit = Math.trunc((((props.timerMin/10) - Math.floor(props.timerMin/10)))*10);
  let secondsFirstDigit = Math.trunc(props.timersec/10);
  let secondsSecondDigit = Math.trunc((((props.timersec/10) - Math.floor(props.timersec/10)))*10);

  console.log(minutesFirstDigit + "" + minutesSecondDigit + ":" + secondsFirstDigit + "" + secondsSecondDigit )

  return (

      // eslint-disable-next-line react/prop-types
      <div className="_qWTcH _1tbqx">
        <div className="_3cpN7">
          <div className="_2aOn7" style={{color:'#000000'}}>Minutes</div>
          <div className="_2EBbg">
            <div className="_SKh-V">{minutesFirstDigit}</div>
            <div className="_106d2">{minutesFirstDigit}</div>
            <div className="_3luxx">
              <div className="_2v-d4 _1GZQ7">{minutesFirstDigit}</div>
              <div className="_2v-d4 _3AVXa">{minutesFirstDigit}</div>
            </div>
          </div>
          <div className="_2EBbg">
            <div className="_SKh-V">{minutesSecondDigit}</div>
            <div className="_106d2">{minutesSecondDigit}</div>
            <div className="_3luxx">
              <div className="_2v-d4 _1GZQ7">{minutesSecondDigit}</div>
              <div className="_2v-d4 _3AVXa">{minutesSecondDigit}</div>
            </div>
          </div>
        </div>
        <div className="_2hRXr"></div>
        <div className="_3cpN7">
          <div className="_2aOn7" style={{color:'#000000'}}>Seconds</div>
          <div className="_2EBbg">
            <div className="_SKh-V">{secondsFirstDigit}</div>
            <div className="_106d2">{secondsFirstDigit}</div>
            <div className="_3luxx">
              <div className="_2v-d4 _1GZQ7">{secondsFirstDigit}</div>
              <div className="_2v-d4 _3AVXa">{secondsFirstDigit}</div>
            </div>
          </div>
          <div className="_2EBbg">
            <div className="_SKh-V">{secondsSecondDigit}</div>
            <div className="_106d2">{secondsSecondDigit}</div>
            <div className="_3luxx">
              <div className="_2v-d4 _1GZQ7">{secondsSecondDigit}</div>
              <div className="_2v-d4 _3AVXa">{secondsSecondDigit}</div>
            </div>
          </div>
        </div>
      </div>

  );


};

