import { useRef, useState } from "react";
import "./App.css";
import Timer from "./components/StopWatchTimer";
import Start from "./components/StartBtn";
import Stop from "./components/StopBtn";
import Reset from "./components/ResetBtn";
import Laps from "./components/Laps";
import Lap from "./components/LapBtn";
import { TimerType } from "./types/CommonTypes";

function App() {
  const [timer, setTimer] = useState<TimerType>({
    hr: 0,
    min: 0,
    sec: 0,
    mili: 0,
  });
  const [startDisabled, setStartDisabled] = useState(false);
  const [laps, setLaps] = useState<TimerType[]>([]);
  const state = useRef<number>();
  const startTimer = () => {
    state.current = setInterval(() => {
      setTimer((prev) => {
        let prevTime = { ...prev };
        if (prevTime.mili === 100) {
          prevTime.sec++;
          prevTime.mili = 0;
        }
        if (prevTime.sec === 60) {
          prevTime.min++;
          prevTime.sec = 0;
        }
        if (prevTime.min === 60) {
          prevTime.hr++;
          prevTime.min = 0;
        }
        prevTime.mili++;
        return prevTime;
      });
    }, 10);
  };
  const stopTimer = () => {
    clearInterval(state.current);
  };
  const resetTimer = () => {
    setTimer((prev) => {
      let prevTime = { ...prev };
      prevTime.hr = 0;
      prevTime.min = 0;
      prevTime.sec = 0;
      prevTime.mili = 0;
      return prevTime;
    });
    setLaps([]);
  };
  const captureLap = () => {
    setLaps((prev) => [...prev, timer]);
  };
  return (
    <>
      <div className="top-container">
        <h1>StopWatch BITCS React Assignment</h1>
        <h2>Hr : Min : Sec : Msec</h2>
      </div>

      <div className="container">
        <Timer timer={timer} />
        <div className="second-container">
          <Start
            handleStart={startTimer}
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
          />
          <Stop
            handleStop={stopTimer}
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
          />
          <Reset
            startDisabled={startDisabled}
            setStartDisabled={setStartDisabled}
            handleReset={resetTimer}
          />
          <Lap startDisabled={startDisabled} handleLap={captureLap} />
        </div>
        <Laps laps={laps} />
      </div>
    </>
  );
}

export default App;
