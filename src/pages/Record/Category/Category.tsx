import OnboardCard from "@/components/OnboardCard";
import { CategoryHeader, CategoryWrapper } from "./Category.styled";
import Typography from "@/foundations/Typography";
import { recordCategoryAtom } from "@/atoms/record";

const Category = () => {
  return (
    <>
      <CategoryHeader>
        <Typography text="활동 카테고리 선택" type="h2" />
      </CategoryHeader>
      <CategoryWrapper>
        <OnboardCard
          state={recordCategoryAtom}
          interestCode="5"
          icon="shopping"
          layoutwidth=""
          titlewidth=""
          theme="dark"
          title="쇼핑"
          flexdirection="row"
        />
        <OnboardCard
          state={recordCategoryAtom}
          interestCode="5"
          icon="shopping"
          layoutwidth=""
          titlewidth=""
          theme="dark"
          title="쇼핑"
          flexdirection="row"
        />
        <OnboardCard
          state={recordCategoryAtom}
          interestCode="5"
          icon="shopping"
          layoutwidth=""
          titlewidth=""
          theme="dark"
          title="쇼핑"
          flexdirection="row"
        />
      </CategoryWrapper>
    </>
  );
};

export default Category;
