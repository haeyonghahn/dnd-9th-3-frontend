import Icon from "@/foundations/Icon";
import Typography from "@/foundations/Typography";
import { CategoryWrapper } from "./CategoryCard.styled";
import { InterestElement } from "@/types/user";
import { useState } from "react";

interface ICategoryCard {
  interestCode: string;
  interestName: string;
  icon: string;
  minX?: string;
  minY?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
  width?: string;
  height?: string;
  selected?: boolean;
  sendDataToParent: (classList: DOMTokenList, data: InterestElement) => void;
}

const CategoryCard = ({
  interestCode,
  interestName,
  icon,
  minX = "2",
  minY = "3",
  viewBoxWidth = "48",
  viewBoxHeight = "48",
  width = "40",
  height = "35",
  selected = false,
  sendDataToParent,
}: ICategoryCard) => {
  const [isSelect, setSelect] = useState(selected);
  const selectCategories = (
    event: React.MouseEvent<HTMLElement>,
    categoryCode: string,
    categoryName: string
  ) => {
    const {
      currentTarget: { classList },
    } = event;
    setSelect((prev) => !prev);
    sendDataToParent(classList, {
      interestCode: categoryCode,
      interestName: categoryName,
    });
  };
  return (
    <>
      <CategoryWrapper
        className={isSelect ? "selected" : ""}
        onClick={(event) => selectCategories(event, interestCode, interestName)}
      >
        <Icon
          icon={icon}
          minX={minX}
          minY={minY}
          viewBoxWidth={viewBoxWidth}
          viewBoxHeight={viewBoxHeight}
          width={width}
          height={height}
        />
        <Typography text={interestName} type="body0" display="inline" />
      </CategoryWrapper>
    </>
  );
};

export default CategoryCard;
