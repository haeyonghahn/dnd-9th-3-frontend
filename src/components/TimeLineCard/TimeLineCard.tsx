import Icon from "@/foundations/Icon";
import {
  RecordCardWrapper,
  RecordCardLine,
  RecordContent,
  RecordPlace,
  RecordContentHeader,
  RecordImageBox,
  RecordDescription,
  RecordDescriptionMore,
  RecordImageWrapper,
} from "./TimeLineCard.styled";
import Typography from "@/foundations/Typography/Typography";
import RecordImage from "./TimeLineImage";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { deleteRecordPopUpOverAtom } from "@/atoms/popup";
import Button from "../Button";

interface ITimeLineCardProps {
  date: string;
  placeName: string;
  title: string;
  description: string;
  src: string;
  theme?: string;
  images: string[];
}

const TimeLineCard = ({
  date,
  placeName,
  title,
  description,
  src,
  theme,
  images,
}: ITimeLineCardProps) => {
  const [textOver, setTextOver] = useState(true);
  const setPopUpOver = useSetRecoilState(deleteRecordPopUpOverAtom);

  const handleTextOver = () => {
    setTextOver((prev) => !prev);
  };
  const handlePopUp = () => {
    setPopUpOver((prev) => !prev);
  };

  return (
    <RecordCardWrapper>
      <RecordCardLine>
        <Icon icon="start" />
        <Icon
          icon="verticalLine"
          width="2"
          height="504"
          minX="0"
          minY="-10"
          viewBoxWidth="2"
          viewBoxHeight="504"
        />
      </RecordCardLine>
      <RecordContent>
        <RecordContentHeader>
          <Typography text={date} type="h0" />
          <Button
            width="15%"
            bordercolor="#A4A6AA"
            color="#A4A6AA"
            backgroundcolor="#282932"
            text="삭제"
            onClick={handlePopUp}
            none="true"
            theme={theme}
          />
        </RecordContentHeader>
        <RecordPlace>
          <Icon
            icon="locationOn"
            width="12"
            height="12"
            minX="0"
            minY="0"
            viewBoxWidth="12"
            viewBoxHeight="12"
          />
          <Typography text={placeName} type="h3" />
        </RecordPlace>
        <RecordImageWrapper>
          <RecordImageBox>
            <RecordImage src={src} />
          </RecordImageBox>
          <Typography
            text={`${images.length > 1 ? "+" + (images.length - 1) : ""} `}
            type="body2"
          />
        </RecordImageWrapper>
        <Typography text={title} type="h3" />
        <RecordDescription>
          <Typography
            text={description}
            type="body2"
            textover={String(textOver)}
            textoverwidth="268px"
          />
          <RecordDescriptionMore onClick={handleTextOver}>
            <Typography text={`더보기 ${textOver ? "▼" : "▲"} `} type="body2" />
          </RecordDescriptionMore>
        </RecordDescription>
      </RecordContent>
    </RecordCardWrapper>
  );
};

export default TimeLineCard;
