import { TimerType } from "../types/CommonTypes";

type Timer = {
  timer: TimerType;
};
function StopWatchTimer({ timer }: Timer) {
  return (
    <div>
      <div className="timer">
        {`${timer.hr.toString().length === 2 ? timer.hr : "0" + timer.hr} : ${
          timer.min.toString().length === 2 ? timer.min : "0" + timer.min
        } : ${
          timer.sec.toString().length === 2 ? timer.sec : "0" + timer.sec
        }  : ${
          timer.mili.toString().length === 2 ? timer.mili : "0" + timer.mili
        } `}
      </div>
    </div>
  );
}

export default StopWatchTimer;
