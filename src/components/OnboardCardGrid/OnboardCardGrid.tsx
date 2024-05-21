import OnboardCard from "@/components/OnboardCard/OnboardCard";
import { Layout } from "./OnboardCardGrid.styled";

interface ICardGridProps {
  data: OnbardCardElement[];
}

const OnboardCardGrid = ({ data }: ICardGridProps) => {
  return (
    <>
      <Layout>
        {data.map((item, idx) => (
          <OnboardCard
            key={idx}
            interestCode={item.interestCode}
            icon={item.icon}
            theme={item.theme}
            title={item.title}
          />
        ))}
      </Layout>
    </>
  );
};

export default OnboardCardGrid;
