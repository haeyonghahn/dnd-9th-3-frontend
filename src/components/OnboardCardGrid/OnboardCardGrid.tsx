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
            icon={item.icon}
            interestCode={item.interestCode}
            interestName={item.interestName}
          />
        ))}
      </Layout>
    </>
  );
};

export default OnboardCardGrid;
