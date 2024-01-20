import { RecoilRoot } from "recoil";
import OnboardCardGrid from "./OnboardCardGrid";

export default {
  title: "Layout/OnboardCardGrid",
  component: OnboardCardGrid,
};

export const AllTypes = () => (
  <>
    <RecoilRoot>
      <OnboardCardGrid
        data={[
          {
            interestCode: "1",
            icon: "shopping",
            theme: "dark",
            title: "쇼핑",
          },
          {
            interestCode: "2",
            icon: "travel",
            theme: "dark",
            title: "여행",
          },
          {
            interestCode: "3",
            icon: "delicacies",
            theme: "dark",
            title: "미식",
          },
          {
            interestCode: "4",
            icon: "reading",
            theme: "dark",
            title: "독서",
          },
          {
            interestCode: "5",
            icon: "cooking",
            theme: "dark",
            title: "요리",
          },
          {
            interestCode: "6",
            icon: "culture",
            theme: "dark",
            title: "문화",
          },
          {
            interestCode: "7",
            icon: "sports",
            theme: "dark",
            title: "스포츠",
          },
          {
            interestCode: "8",
            icon: "hobby",
            theme: "dark",
            title: "취미",
          },
          {
            interestCode: "9",
            icon: "study",
            theme: "dark",
            title: "학업",
          },
        ]}
      />
    </RecoilRoot>
  </>
);
