import Icon from "@/foundations/Icon";
import { ScoreCardContent, ScoreTextBox } from "./ScoreCard.styled";
import Typography from "@/foundations/Typography";

interface IScoreCard {
  icon: string;
  minX?: string;
  minY?: string;
  viewBoxHeight?: string;
  viewBoxWidth?: string;
  width?: string;
  height?: string;
}

const ScoreCard = ({
  icon,
  minX,
  minY,
  viewBoxHeight,
  viewBoxWidth,
  width,
  height,
}: IScoreCard) => {
  return (
    <>
      <ScoreCardContent>
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
          <Typography text="낭만이긴 했어요" type="h3" color="#75777B" />
        </ScoreTextBox>
      </ScoreCardContent>
    </>
  );
};

export default ScoreCard;
