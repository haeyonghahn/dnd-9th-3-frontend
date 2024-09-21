import Icon from "@/foundations/Icon";
import {
  Container,
  Line,
  Content,
  ContentHeader,
  Place,
  ImageWrapper,
  ImageBox,
  Description,
  DescriptionMore,
} from "./TimeLineCard.styled";
import Typography from "@/foundations/Typography/Typography";
import TimeLineImage from "./TimeLineImage";
import { useState } from "react";
import Button from "../Button";
import { deleteRecordPopUpOverAtom } from "@/atoms/popup";
import { useSetRecoilState } from "recoil";
import { deleteRecordNumberAtom } from "@/atoms/record";
import { IImage } from "@/types/image";

interface TimeLineCardProps {
  recordNumber: string;
  date: string;
  placeName: string;
  title: string;
  description: string;
  src: string;
  theme?: string;
  images: IImage[];
}

const TimeLineCard = ({
  recordNumber,
  date,
  placeName,
  title,
  description,
  src,
  theme,
  images,
}: TimeLineCardProps) => {
  const [textOver, setTextOver] = useState(true);
  const setDeleteRecordNumber = useSetRecoilState(deleteRecordNumberAtom);
  const setPopUpOver = useSetRecoilState(deleteRecordPopUpOverAtom);

  const handlePopUp = () => {
    setPopUpOver((prev) => !prev);
    setDeleteRecordNumber(recordNumber);
  };
  const handleTextOver = () => {
    setTextOver((prev) => !prev);
  };

  return (
    <Container>
      <Line>
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
      </Line>
      <Content>
        <ContentHeader>
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
        </ContentHeader>
        <Place>
          <Icon
            icon="locationOn"
            fill="#3CEFA3"
            width="12"
            height="12"
            minX="0"
            minY="0"
            viewBoxWidth="12"
            viewBoxHeight="12"
          />
          <Typography text={placeName} type="h3" />
        </Place>
        <ImageWrapper>
          <ImageBox>
            <TimeLineImage src={src} />
          </ImageBox>
          <Typography
            text={`${images.length > 1 ? "+" + (images.length - 1) : ""} `}
            type="body2"
          />
        </ImageWrapper>
        <Typography text={title} type="h3" />
        <Description>
          <Typography
            text={description}
            type="body2"
            textover={String(textOver)}
            textoverwidth="268px"
          />
          <DescriptionMore onClick={handleTextOver}>
            <Typography text={`더보기 ${textOver ? "▼" : "▲"} `} type="body2" />
          </DescriptionMore>
        </Description>
      </Content>
    </Container>
  );
};

export default TimeLineCard;
