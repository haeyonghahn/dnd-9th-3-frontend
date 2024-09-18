import Icon from "@/foundations/Icon";
import {
  ScoreCardWrapper,
  ScoreContainer,
  ScoreGrid,
  ScoreIndicator,
  ScoreWrapper,
} from "./Score.styled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { scorePopUpAtom } from "@/atoms/popup";
import Typography from "@/foundations/Typography";
import Button from "@/components/Button";
import { SCORES } from "@/api/const";
import ScoreCard from "./ScoreCard";
import {
  recordCategoriesAtom,
  recordDateAtom,
  recordPlaceAtom,
  recordScoreAtom,
  recordStateAtom,
} from "@/atoms/record";

const Score = () => {
  const setScorePopUpPopUp = useSetRecoilState(scorePopUpAtom);
  const haandleGoBack = () => {
    setScorePopUpPopUp((prev) => !prev);
  };

  const recordDate = useRecoilValue(recordDateAtom);
  const recordPlace = useRecoilValue(recordPlaceAtom);
  const recordCategories = useRecoilValue(recordCategoriesAtom);
  const recordState = useRecoilValue(recordStateAtom);
  const recordScore = useRecoilValue(recordScoreAtom);
  const handleSuccess = () => {
    console.log("test");
  };
  return (
    <ScoreContainer>
      <div style={{ marginLeft: "5%", marginTop: "5%" }}>
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
            {SCORES.map((score) => (
              <ScoreCard
                id={score.id}
                key={score.id}
                icon={score.icon}
                viewBoxHeight={score.viewBoxHeight}
                viewBoxWidth={score.viewBoxWidth}
                height={score.height}
                width={score.width}
                text={score.text}
              />
            ))}
          </ScoreGrid>
        </ScoreCardWrapper>
        <Button text="기록 완료" width="100%" onClick={handleSuccess} />
      </ScoreWrapper>
    </ScoreContainer>
  );
};

export default Score;
