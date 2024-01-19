import ImageBox from "../ImageBox/ImageBox";
import { Layout, Title } from "./Card.styled";

interface ICardProps extends ImageBoxElement {
  title: string;
}

const Card = ({ icon, theme, title }: ICardProps) => {
  return (
    <>    
      <Layout theme={theme}>
        <ImageBox icon={icon} 
          theme={theme} 
          size="small" 
          minX="10" 
          minY="10" 
          viewBoxHeight="30" 
          viewBoxWidth="30" />
          <Title theme={theme}>{title}</Title>
      </Layout>
    </>
  )
}

export default Card;