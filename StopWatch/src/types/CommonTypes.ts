export type ButtonType = {
  startDisabled: boolean;
  setStartDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  handleReset?: () => void;
  handleStart?: () => void;
  handleStop?: () => void;
};

export type TimerType = {
  hr: number;
  min: number;
  sec: number;
  mili: number;
};
