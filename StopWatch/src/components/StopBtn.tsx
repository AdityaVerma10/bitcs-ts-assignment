import { ButtonType } from "../types/CommonTypes";
function StopBtn({ startDisabled, setStartDisabled, handleStop }: ButtonType) {
  return (
    <button
      className="stop"
      onClick={() => {
        setStartDisabled(false);
        handleStop && handleStop();
      }}
      disabled={!startDisabled}
    >
      Stop
    </button>
  );
}

export default StopBtn;
