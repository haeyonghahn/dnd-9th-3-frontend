import Icon from "@/foundations/Icon";
import { RecordCardWrapper, RecordCardLine } from "./RecordCard.styled";

const RecordCard = () => {
  return (
    <RecordCardWrapper>
      <RecordCardLine>
        <Icon icon="start" />
        <Icon
          icon="verticalLine"
          width="2"
          height="504"
          minX="0"
          minY="0"
          viewBoxWidth="2"
          viewBoxHeight="504"
        />
        <Icon
          icon="mapPin"
          width="12"
          height="12"
          minX="0"
          minY="0"
          viewBoxWidth="12"
          viewBoxHeight="12"
        />
      </RecordCardLine>
    </RecordCardWrapper>
  );
};

export default RecordCard;
