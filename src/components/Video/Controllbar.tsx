import ProgressBar from "./ProgressBar";
import { Wrapper } from "./Controllbar.styled";

interface ControlbarProps {
  onProgressChange: (percent: number) => void;
  onPlayIconClick: () => void;
  startTime: number;
  totalTime: number;
  currentTime: number;
  showControl: boolean;
  nowPlaying: boolean;
  videoElement: HTMLVideoElement | null;
}

const Controlbar: React.FC<ControlbarProps> = ({
  onProgressChange,
  onPlayIconClick,
  totalTime,
  currentTime,
  startTime,
  showControl,
  nowPlaying,
  videoElement,
}) => {
  const onMouseUp = () => {
    if (videoElement) {
      videoElement.currentTime = currentTime;
      nowPlaying ? videoElement.play() : videoElement.pause();
    }
  };

  const onMouseDown = () => {
    if (videoElement) {
      videoElement.pause();
    }
  };

  return (
    <Wrapper showcontrol={String(showControl)}>
      {/* <span>{toTimeString(startTime)}</span> */}
      <ProgressBar
        max={totalTime}
        value={currentTime}
        onChange={onProgressChange}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      />
      {/* <span>{toTimeString(totalTime)}</span> */}
    </Wrapper>
  );
};

export default Controlbar;
