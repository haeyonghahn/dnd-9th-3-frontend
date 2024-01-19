import Card from "@/components/Card/Card";
import { Layout } from "./CardGrid.styled";

interface ICardGridProps {
  data: CardElement[]
}

const CardGrid = ({ data }: ICardGridProps) => {
  const items = data;
  return (
    <>
      <Layout>
        {items.map(({ icon, theme, title }, idx) => (
        <Card icon={icon} theme={theme} title={title} key={idx} />
      ))}
      </Layout>
    </>
  );
}

export default CardGrid;