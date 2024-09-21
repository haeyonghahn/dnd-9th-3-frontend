import OnboardCard from "@/components/OnboardCard/OnboardCard";
import { Layout } from "./OnboardCardGrid.styled";

interface OnbardCardProps {
  icon: string;
  interestCode: string;
  interestName: string;
  size?: string;
  minX?: string;
  minY?: string;
  viewBoxWidth?: string;
  viewBoxHeight?: string;
}

interface CardGridProps {
  data: OnbardCardProps[];
}

const OnboardCardGrid = ({ data }: CardGridProps) => {
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
