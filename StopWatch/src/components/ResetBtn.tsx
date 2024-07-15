import { ButtonType } from "../types/CommonTypes";
function ResetBtn({
  startDisabled,
  setStartDisabled,
  handleReset,
}: ButtonType) {
  return (
    <button
      className="reset"
      disabled={startDisabled}
      onClick={() => {
        setStartDisabled(false);
        handleReset && handleReset();
      }}
    >
      Reset
    </button>
  );
}

export default ResetBtn;
