import { useEffect, useRef, useState } from "react";
import { Container, Wrapper } from "./Video.styled";
import Controlbar from "./Controllbar";
import React from "react";

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);

  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  const videoSrc = src || "";
  const startTime = Math.floor(currentTime);

  // progress를 이동시켰을 때 실행되는 함수
  const onProgressChange = (percent: number) => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);
      setCurrentTime(playingTime);
    }
  };

  // play icon을 클릭했을 때 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = () => {
    if (videoElement) {
      if (!showControl) {
        setShowControl(true);
        videoElement.pause();
      } else {
        setShowControl(false);
        videoElement.play();
      }
    }
  };

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener("timeupdate", function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
      setNowPlaying(true);
      observedVideoElement.play();
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  return (
    <Container>
      <Wrapper
        ref={ref}
        autoPlay
        muted={true}
        loop={true}
        onClick={handleControlVisible}
      >
        <source src={videoSrc} type="video/mp4" />
      </Wrapper>
      <Controlbar
        onProgressChange={onProgressChange}
        onPlayIconClick={onPlayIconClick}
        totalTime={totalTime}
        currentTime={currentTime}
        startTime={startTime}
        showControl={showControl}
        nowPlaying={nowPlaying}
        videoElement={videoElement}
      />
    </Container>
  );
};

export default React.memo(Video);
