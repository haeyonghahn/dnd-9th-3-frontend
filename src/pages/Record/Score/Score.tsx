import Icon from "@/foundations/Icon";
import {
  ScoreBack,
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
  recordDescriptAtom,
  recordImageAtom,
  recordPlaceAtom,
  recordScoreAtom,
  recordStateAtom,
  recordTitleAtom,
} from "@/atoms/record";
import { format } from "date-fns";
import { useCreateRecord } from "@/hooks/api/useFetchRecord";
import { IInterest } from "@/types/user";

const Score = () => {
  const setScorePopUp = useSetRecoilState(scorePopUpAtom);
  const handleGoBack = () => {
    setScorePopUp((prev) => !prev);
  };

  const recordImages = useRecoilValue(recordImageAtom);
  const recordTitle = useRecoilValue(recordTitleAtom);
  const recordDescript = useRecoilValue(recordDescriptAtom);
  const recordDate = useRecoilValue(recordDateAtom);
  const recordPlace = useRecoilValue(recordPlaceAtom);
  const recordCategories = useRecoilValue(recordCategoriesAtom);
  const recordState = useRecoilValue(recordStateAtom);
  const recordScore = useRecoilValue(recordScoreAtom);

  const { mutate: createRecordMutate } = useCreateRecord();
  const handleSuccess = (
    files: File[],
    title: string,
    description: string,
    recordDate: string,
    placeTitle: string,
    placeLatitude: number,
    placeLongitude: number,
    state: string,
    score: number,
    interests: IInterest[] | undefined
  ) => {
    createRecordMutate({
      files: files,
      title: title,
      description: description,
      recordDate: recordDate,
      placeTitle: placeTitle,
      placeLatitude: placeLatitude,
      placeLongitude: placeLongitude,
      state: state,
      score: score,
      interests: interests,
    });
  };
  return (
    <ScoreContainer>
      <ScoreBack>
        <Icon
          icon="leftArrow"
          minX="0"
          minY="-5"
          viewBoxHeight="18"
          viewBoxWidth="18"
          width="30"
          height="35"
          onClick={handleGoBack}
        />
      </ScoreBack>
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
        <Button
          text="기록 완료"
          width="100%"
          onClick={() =>
            handleSuccess(
              recordImages
                .flatMap(({ file }) => file)
                .filter((file) => file != null),
              recordTitle,
              recordDescript,
              recordDate ? format(recordDate, "yyyy-MM-dd'T'HH:mm:ss") : "",
              recordPlace.placeName,
              recordPlace.placeLatitude,
              recordPlace.placeLongitude,
              recordState,
              recordScore,
              recordCategories
            )
          }
        />
      </ScoreWrapper>
    </ScoreContainer>
  );
};

export default Score;
