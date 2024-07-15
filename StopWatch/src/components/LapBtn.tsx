type LapBtnType = {
  startDisabled: boolean;
  handleLap: () => void;
};
function LapBtn({ startDisabled, handleLap }: LapBtnType) {
  return (
    <button className="lap" disabled={!startDisabled} onClick={handleLap}>
      Lap
    </button>
  );
}

export default LapBtn;
