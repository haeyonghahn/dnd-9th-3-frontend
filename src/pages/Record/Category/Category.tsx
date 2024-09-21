import {
  CategoryButton,
  CategoryContainer,
  CategoryHeader,
} from "./Category.styled";
import Typography from "@/foundations/Typography";
import Button from "@/components/Button";
import CategoryCard from "./CategoryCard";
import { categoryPopUpAtom } from "@/atoms/popup";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { recordCategoriesAtom } from "@/atoms/record";
import { CATEGORIES } from "@/api/const";
import { IInterest } from "@/types/user";

interface CategoriesProps {
  categories: IInterest[];
}

const Category = ({ categories }: CategoriesProps) => {
  const [interests, setInterests] = useState<IInterest[] | undefined>(
    categories
  );
  const setCategories = useSetRecoilState(recordCategoriesAtom);
  const setCategoryPopUp = useSetRecoilState(categoryPopUpAtom);

  const handleDataFromChild = (classList: DOMTokenList, data: IInterest) => {
    setInterests((oldCategories) => {
      if (oldCategories) {
        const targetIndex = oldCategories.findIndex(
          (category) => category.interestCode === data.interestCode
        );
        if (classList.contains("selected")) {
          return [
            ...oldCategories.slice(0, targetIndex),
            ...oldCategories.slice(targetIndex + 1),
          ];
        } else {
          const newCategories = {
            interestCode: data.interestCode,
            interestName: data.interestName,
          };
          return [...oldCategories, newCategories];
        }
      }
    });
  };

  const handleClick = () => {
    setCategoryPopUp((prev) => !prev);
    setCategories(interests);
  };
  return (
    <>
      <CategoryHeader>
        <Typography text="활동 카테고리 선택" type="h2" />
      </CategoryHeader>
      <CategoryContainer>
        {CATEGORIES.map((category, index) => (
          <CategoryCard
            key={index}
            interestCode={category.interestCode}
            interestName={category.interestName}
            icon={category.icon}
            selected={
              categories.findIndex(
                (x) => x.interestCode === category.interestCode
              ) !== -1
            }
            minX={category.minX}
            minY={category.minY}
            viewBoxHeight={category.viewBoxHeight}
            viewBoxWidth={category.viewBoxWidth}
            width={category.width}
            height={category.height}
            sendDataToParent={handleDataFromChild}
          />
        ))}
        <CategoryButton>
          <Button width="100%" text="선택완료" onClick={handleClick} />
        </CategoryButton>
      </CategoryContainer>
    </>
  );
};

export default Category;
