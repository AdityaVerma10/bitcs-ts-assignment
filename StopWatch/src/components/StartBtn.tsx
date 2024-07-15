import { ButtonType } from "../types/CommonTypes";

function StartBtn({
  startDisabled,
  setStartDisabled,
  handleStart,
}: ButtonType) {
  return (
    <button
      className="start"
      onClick={() => {
        setStartDisabled(true);
        handleStart && handleStart();
      }}
      disabled={startDisabled}
    >
      Start
    </button>
  );
}

export default StartBtn;
