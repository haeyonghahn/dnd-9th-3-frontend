import Icon from "@/foundations/Icon";
import {
  ScoreCardWrapper,
  ScoreContainer,
  ScoreGrid,
  ScoreIndicator,
  ScoreWrapper,
} from "./Score.styled";
import { useSetRecoilState } from "recoil";
import { scorePopUpAtom } from "@/atoms/popup";
import Typography from "@/foundations/Typography";
import Button from "@/components/Button";
import { SCORES } from "@/api/const";
import ScoreCard from "./ScoreCard";

const Score = () => {
  const setScorePopUpPopUp = useSetRecoilState(scorePopUpAtom);
  const haandleGoBack = () => {
    setScorePopUpPopUp((prev) => !prev);
  };
  return (
    <ScoreContainer>
      <div style={{ marginLeft: "5%", marginTop: "10%" }}>
        <Icon
          icon="leftArrow"
          minX="0"
          minY="-5"
          viewBoxHeight="18"
          viewBoxWidth="18"
          width="30"
          height="35"
          onClick={haandleGoBack}
        />
      </div>
      <ScoreIndicator />
      <ScoreWrapper>
        <Typography
          text="작성하신 굳이데이는 얼마나 낭만적이었나요?"
          type="h1"
        />
        <ScoreCardWrapper>
          <ScoreGrid>
            {SCORES.map((score, index) => (
              <ScoreCard
                key={index}
                icon={score.icon}
                viewBoxHeight={score.viewBoxHeight}
                viewBoxWidth={score.viewBoxWidth}
                height={score.height}
                width={score.width}
              />
            ))}
          </ScoreGrid>
        </ScoreCardWrapper>
        <Button text="기록 완료" width="100%" />
      </ScoreWrapper>
    </ScoreContainer>
  );
};

export default Score;
