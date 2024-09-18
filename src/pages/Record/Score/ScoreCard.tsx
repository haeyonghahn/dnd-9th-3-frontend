import Icon from "@/foundations/Icon";
import { ScoreCardContent, ScoreTextBox } from "./ScoreCard.styled";
import Typography from "@/foundations/Typography";
import { useRecoilState } from "recoil";
import { recordScoreAtom } from "@/atoms/record";

interface IScoreCard {
  id: number;
  icon: string;
  minX?: string;
  minY?: string;
  viewBoxHeight?: string;
  viewBoxWidth?: string;
  width?: string;
  height?: string;
  text: string;
}

const ScoreCard = ({
  id,
  icon,
  minX,
  minY,
  viewBoxHeight,
  viewBoxWidth,
  width,
  height,
  text,
}: IScoreCard) => {
  const [selectCard, setSelectCard] = useRecoilState(recordScoreAtom);
  const handleClick = (id: number) => {
    setSelectCard(id);
  };
  return (
    <>
      <ScoreCardContent
        className={selectCard === id ? "selected" : ""}
        onClick={() => handleClick(id)}
      >
        <Icon
          icon={icon}
          minX={minX}
          minY={minY}
          viewBoxHeight={viewBoxHeight}
          viewBoxWidth={viewBoxWidth}
          width={width}
          height={height}
        />
        <ScoreTextBox>
          <Typography text={text} type="h3" color="#75777B" />
        </ScoreTextBox>
      </ScoreCardContent>
    </>
  );
};

export default ScoreCard;
